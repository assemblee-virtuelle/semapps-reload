const jsonld = require('jsonld');

module.exports = {
  api: async function api(ctx) {
    const type = ctx.params.typeURL;
    const accept = ctx.meta.headers.accept;
    try {
      let body = await ctx.call('ldp.getByType', {
        type: type
      });
      ctx.meta.$responseType = accept;
      if (!accept.includes('json')) {
        body = await this.jsonldToTriples(body, ctx.meta.headers.accept);
      }
      return body;
    } catch (e) {
      //TODO manage code from typed Error
      ctx.meta.$statusCode = 500;
    }
  },
  action: {
    visibility: 'public',
    params: {
      type: 'string'
    },
    async handler(ctx) {
      let result = await ctx.call('triplestore.query', {
        query: `
          ${this.getPrefixRdf()}
          CONSTRUCT {
            ?subject ?predicate ?object.
          }
          WHERE {
            ?subject rdf:type ${ctx.params.type} ;
              ?predicate ?object.
          }
              `,
        accept: 'json'
      });
      result = await jsonld.compact(result, this.getPrefixJSON());
      const { '@graph': graph, '@context': context, ...other } = result;
      const contains = graph || (Object.keys(other).length === 0 ? [] : [other]);
      result = {
        '@context': result['@context'],
        '@id': `${this.settings.baseUrl}${ctx.params.typeURL}`,
        '@type': ['ldp:Container', 'ldp:BasicContainer'],
        'ldp:contains': contains
      };
      return result;
    }
  }
};
