const DbService = require('moleculer-db');
const uuid = require('uuid/v1');

const ActivityService = {
  name: 'activitypub.activity',
  mixins: [DbService],
  adapter: null, // To be set by the user
  settings: {
    idField: '@id', // Use @id as the main ID field (used by MongoDB)
    containerUri: null, // To be set by the user
  },
  hooks: {
    before: {
      create: [
        function addId(ctx) {
          if (!ctx.params['@id']) {
            // If no ID has been set, generate one based on the container URI
            ctx.params['@id'] = this.settings.containerUri + uuid().substring(0, 8);
          }
          return ctx;
        }
      ],
      get: [
        function useUriAsId(ctx) {
          ctx.params['id'] = this.settings.containerUri + ctx.params['id'];
        }
      ]
    }
  }
};

module.exports = ActivityService;
