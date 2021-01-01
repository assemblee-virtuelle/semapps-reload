const urlJoin = require('url-join');
const { objectCurrentToId } = require('../utils');

const OutboxService = {
  name: 'activitypub.outbox',
  settings: {
    itemsPerPage: 10
  },
  dependencies: ['activitypub.activity', 'activitypub.object', 'activitypub.collection'],
  actions: {
    async post(ctx) {
      let { username, containerUri: actorContainerUri, collectionUri, ...activity } = ctx.params;

      if (!username && !collectionUri) {
        throw new Error('Outbox post: a username or collectionUri must be specified');
      }

      collectionUri = collectionUri || urlJoin(actorContainerUri, username, 'outbox');

      const collectionExists = await ctx.call('activitypub.collection.exist', { collectionUri });

      if (!collectionExists) {
        ctx.meta.$statusCode = 404;
        return;
      }

      // TODO check that logged user is posting to his own outbox

      // Process object create, update or delete
      // and return an activity with the object ID
      activity = await ctx.call('activitypub.object.process', { activity });

      // Use the current time for the activity's publish date
      // TODO use it to order the ordered collections
      activity.published = new Date().toISOString();

      activity = await ctx.call('activitypub.activity.create', activity);

      // Attach the newly-created activity to the outbox
      await ctx.call('activitypub.collection.attach', {
        collectionUri: collectionUri,
        item: activity
      });

      ctx.emit('activitypub.outbox.posted', { activity });

      return activity;
    },
    async list(ctx) {
      let { username, containerUri: actorContainerUri, collectionUri, page } = ctx.params;

      if (!username && !collectionUri) {
        throw new Error('A username or collectionUri must be specified');
      }

      ctx.meta.$responseType = 'application/ld+json';

      const collection = await ctx.call('activitypub.collection.get', {
        id: collectionUri || urlJoin(actorContainerUri, username, 'outbox'),
        page,
        itemsPerPage: this.settings.itemsPerPage,
        dereferenceItems: true,
        queryDepth: 3
      });

      if (collection) {
        collection.orderedItems =
          collection.orderedItems && collection.orderedItems.map(activityJson => objectCurrentToId(activityJson));
        return collection;
      } else {
        ctx.meta.$statusCode = 404;
      }
    }
  }
};

module.exports = OutboxService;
