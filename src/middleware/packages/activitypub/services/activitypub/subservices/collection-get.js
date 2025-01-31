const { MIME_TYPES } = require('@semapps/mime-types');
const { MoleculerError } = require('moleculer').Errors;

module.exports = async function get(ctx) {
  const { resourceUri: collectionUri, jsonContext } = ctx.params;
  const beforeEq = ctx.params.beforeEq || ctx.meta.queryString?.beforeEq;
  const afterEq = ctx.params.afterEq || ctx.meta.queryString?.afterEq;
  let prevCursorUri, nextCursorUri;

  if (beforeEq && afterEq) {
    throw new MoleculerError('Cannot get a collection with both beforeEq and afterEq', 400, 'BAD_REQUEST');
  }

  const webId = ctx.params.webId || ctx.meta.webId || 'anon';
  const localContext = await ctx.call('jsonld.context.get');

  const results = await ctx.call('triplestore.query', {
    query: `
      PREFIX as: <https://www.w3.org/ns/activitystreams#>
      PREFIX semapps: <http://semapps.org/ns/core#>
      SELECT ?ordered ?summary ?dereferenceItems ?itemsPerPage ?sortPredicate ?sortOrder
      WHERE {
        <${collectionUri}> a <https://www.w3.org/ns/activitystreams#Collection> . # This will return [] if the user has no read permission
        BIND (EXISTS{<${collectionUri}> a <https://www.w3.org/ns/activitystreams#OrderedCollection>} AS ?ordered)
        OPTIONAL { <${collectionUri}> as:summary ?summary . }
        OPTIONAL { <${collectionUri}> semapps:dereferenceItems ?dereferenceItems . }
        OPTIONAL { <${collectionUri}> semapps:itemsPerPage ?itemsPerPage . }
        OPTIONAL { <${collectionUri}> semapps:sortPredicate ?sortPredicate . }
        OPTIONAL { <${collectionUri}> semapps:sortOrder ?sortOrder . }
      }
    `,
    accept: MIME_TYPES.JSON,
    webId
  });

  if (results.length === 0) {
    throw new MoleculerError('Not found', 404, 'NOT_FOUND');
  }

  const options = Object.fromEntries(
    Object.entries(results[0]).map(([key, result]) => [key, this.getValueFromDataType(result)])
  );

  const collectionOptions = {
    summary: options.summary,
    'semapps:dereferenceItems': options.dereferenceItems,
    'semapps:itemsPerPage': options.itemsPerPage,
    'semapps:sortPredicate': options.sortPredicate,
    'semapps:sortOrder': options.sortOrder
  };

  // Check if the cursor exists and get the sort predicate
  if (beforeEq || afterEq) {
    const cursorResult = await ctx.call('triplestore.query', {
      query: `
        PREFIX as: <https://www.w3.org/ns/activitystreams#>
        SELECT ?itemExists ?cursorSortPredicate
        WHERE {
          BIND (EXISTS{ <${collectionUri}> as:items <${afterEq || beforeEq}> } AS ?itemExists)
        }
      `,
      accept: MIME_TYPES.JSON,
      webId: 'system'
    });
    const itemExists = cursorResult[0]?.itemExists?.value === 'true';
    if (!itemExists) {
      throw new MoleculerError(`Cursor not found: ${afterEq || beforeEq}`, 404, 'NOT_FOUND');
    }
  }

  // Caution: we must do a select query, because construct queries cannot be sorted
  const result = await ctx.call('triplestore.query', {
    query: `
      PREFIX as: <https://www.w3.org/ns/activitystreams#>
      SELECT DISTINCT ?itemUri
      WHERE {
        <${collectionUri}> a as:Collection .
        OPTIONAL { 
          <${collectionUri}> as:items ?itemUri . 
          ${options.ordered ? `OPTIONAL { ?itemUri <${options.sortPredicate}> ?order . }` : ''}
        }
      }
      ${
        options.ordered
          ? `ORDER BY ${options.sortOrder === 'http://semapps.org/ns/core#DescOrder' ? 'DESC' : 'ASC'}( ?order )`
          : ''
      }
    `,
    accept: MIME_TYPES.JSON,
    webId: 'system'
  });

  let allItems = result.filter(node => node.itemUri).map(node => node.itemUri.value);
  const firstItemUri = allItems[0];
  const lastItemUri = allItems[allItems.length - 1];

  //use the cursor to filter the items and save the cursors URIs that will be needed for the next/prev links
  if (beforeEq) {
    const index = allItems.findIndex(item => item === beforeEq);
    nextCursorUri = allItems[index + 1];
    allItems = allItems.slice(0, index + 1);
  } else if (afterEq) {
    const index = allItems.findIndex(item => item === afterEq);
    prevCursorUri = allItems[index - 1];
    allItems = allItems.slice(index);
  }

  let returnData = null;

  if (options.itemsPerPage && !beforeEq && !afterEq) {
    // Pagination is enabled but no page is selected, return the collection
    returnData = {
      '@context': localContext,
      id: collectionUri,
      type: options.ordered ? 'OrderedCollection' : 'Collection',
      ...collectionOptions,
      first: firstItemUri ? `${collectionUri}?afterEq=${encodeURIComponent(firstItemUri)}` : undefined,
      last: lastItemUri ? `${collectionUri}?beforeEq=${encodeURIComponent(lastItemUri)}` : undefined
    };
  } else {
    let selectedItemsUris = allItems;
    let selectedItems = [];
    const itemsProp = options.ordered ? 'orderedItems' : 'items';

    let itemUri = null;
    do {
      itemUri = beforeEq ? allItems.pop() : allItems.shift();
      //shift or pop returns undefined if the array is empty
      if (itemUri) {
        try {
          selectedItems.push(
            await ctx.call('ldp.resource.get', {
              resourceUri: itemUri,
              accept: MIME_TYPES.JSON,
              jsonContext,
              // If a registered app fetch the inbox or outbox, the webId will be "system"
              // But we need to have the real user in case we need to fetch through the proxy
              webId: webId === 'system' && ctx.meta.impersonatedUser ? ctx.meta.impersonatedUser : webId
            })
          );
        } catch (e) {
          if (e.code === 404 || e.code === 403) {
            // Ignore resource if it is not found
            this.logger.debug(`Item not found with URI: ${itemUri}`);
          } else {
            throw e;
          }
        }
      }
    } while ((selectedItems.length < options.itemsPerPage || !options.itemsPerPage) && itemUri);

    // get the missing cursors for the next/prev links
    if (beforeEq) {
      // also reverse the items in this case (as we pop them in the loop, they are selected in reverse order)
      selectedItems.reverse();
      prevCursorUri = allItems.pop();
    } else if (afterEq) {
      nextCursorUri = allItems.shift();
    }

    if (!options.dereferenceItems) {
      selectedItems = selectedItems.map(item => item.id);
    } else {
      // Remove the @context from all items
      selectedItems = selectedItems.map(({ '@context': context, ...item }) => item);
    }

    if (options.itemsPerPage) {
      returnData = {
        '@context': localContext,
        id: `${collectionUri}?${beforeEq ? 'beforeEq' : 'afterEq'}=${encodeURIComponent(beforeEq || afterEq)}`,
        type: options.ordered ? 'OrderedCollectionPage' : 'CollectionPage',
        partOf: collectionUri,
        prev: prevCursorUri ? `${collectionUri}?beforeEq=${encodeURIComponent(prevCursorUri)}` : undefined,
        next: nextCursorUri ? `${collectionUri}?afterEq=${encodeURIComponent(nextCursorUri)}` : undefined,
        [itemsProp]: selectedItems
      };
    } else {
      // No pagination, return the collection
      returnData = {
        '@context': localContext,
        id: collectionUri,
        type: options.ordered ? 'OrderedCollection' : 'Collection',
        ...collectionOptions,
        [itemsProp]: selectedItems
      };
    }
  }

  return await ctx.call('jsonld.parser.compact', {
    input: returnData,
    context: jsonContext || localContext
  });
};
