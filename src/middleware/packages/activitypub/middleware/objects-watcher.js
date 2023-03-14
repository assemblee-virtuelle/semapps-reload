const { PUBLIC_URI, ACTIVITY_TYPES } = require("@semapps/activitypub/constants");

const handledActions = [
  'ldp.container.post',
  'ldp.resource.put',
  'ldp.resource.delete',
  'webacl.resource.addRights',
  'webacl.resource.setRights',
  'webacl.resource.removeRights',
  'webacl.resource.deleteAllRights'
];

const ObjectsWatcherMiddleware = (config = {}) => {
  const { podProvider = false } = config;
  let relayActor, watchedContainers = [], initialized = false;

  const getActor = async (ctx, resourceUri) => {
    if (podProvider) {
      const url = new URL(resourceUri);
      const podOwnerUri = url.origin + '/' + url.pathname.split('/')[1];
      return await ctx.call('activitypub.actor.awaitCreateComplete', { actorUri: podOwnerUri })
    } else {
      return relayActor;
    }
  }

  const getRecipients = async (ctx, resourceUri) => {
    const isPublic = await ctx.call('webacl.resource.isPublic', { resourceUri });
    const actor = await getActor(ctx, resourceUri);
    const usersWithReadRights = await ctx.call('webacl.resource.getUsersWithReadRights', { resourceUri });
    const recipients = usersWithReadRights.filter(u => u !== actor.id);
    if (isPublic) {
      return [...recipients, actor.followers, PUBLIC_URI]
    } else {
      return recipients;
    }
  };

  const isWatched = (containersUris) => {
    return containersUris.some(uri => watchedContainers.some(container => container.pathRegex.test(new URL(uri).pathname)));
  };

  const announce = async (ctx, resourceUri, recipients, activity) => {
    const actor = await getActor(ctx, resourceUri);

    if (recipients.length > 0) {
      return await ctx.call('activitypub.outbox.post', {
        collectionUri: actor.outbox,
        '@context': 'https://www.w3.org/ns/activitystreams',
        actor: actor.id,
        type: ACTIVITY_TYPES.ANNOUNCE,
        object: activity,
        to: recipients
      });
    }
  }

  return ({
    name: 'ObjectsWatcherMiddleware',
    async started(broker) {
      if (!podProvider) {
        await broker.waitForServices('activitypub.relay');
        relayActor = await broker.call('activitypub.relay.getActor');
      }

      const containers = await broker.call('ldp.registry.list');
      watchedContainers = Object.values(containers).filter(c => !c.excludeFromMirror);

      initialized = true;
    },
    localAction: (wrapWatcherMiddleware = (next, action) => {
      if (handledActions.includes(action.name)) {
        return async ctx => {
          // Don't handle actions until middleware is fully started
          // Otherwise, the creation of the relay actor calls the middleware before it started
          if (!initialized) return await next(ctx);

          let actionReturnValue, resourceUri, containerUri, oldContainers, oldRecipients;

          switch (action.name) {
            case 'ldp.container.post':
              containerUri = ctx.params.containerUri;
              break;

            case 'ldp.resource.put':
              resourceUri = ctx.params.resource.id || ctx.params.resource['@id'];
              break;

            case 'ldp.resource.delete':
              resourceUri = ctx.params.resourceUri;
              break;

            case 'webacl.resource.addRights':
            case 'webacl.resource.setRights':
            case 'webacl.resource.removeRights':
            case 'webacl.resource.deleteAllRights':
              // If we are modifying rights of an ACL group, ignore
              if ((new URL(ctx.params.resourceUri)).pathname.startsWith('/_groups/')) return await next(ctx);
              if (!ctx.meta.dataset) throw new Error("No dataset defined" + ctx.params.resourceUri + action.name);
              const containerExist = await ctx.call('ldp.container.exist', { containerUri: ctx.params.resourceUri, webId: 'system' });
              if (containerExist) {
                containerUri = ctx.params.resourceUri;
              } else {
                resourceUri = ctx.params.resourceUri;
              }
              break;
          }

          const containers = containerUri ? [containerUri] : await ctx.call('ldp.resource.getContainers', { resourceUri });
          if (!isWatched(containers)) return await next(ctx);

          /*
           * BEFORE HOOKS
           */
          switch (action.name) {
            case 'ldp.resource.delete':
              oldContainers = await ctx.call('ldp.resource.getContainers', { resourceUri: ctx.params.resourceUri });
              oldRecipients = await getRecipients(ctx, ctx.params.resourceUri);
              break;

            case 'webacl.resource.addRights':
              if (ctx.params.additionalRights) {
                oldRecipients = await getRecipients(ctx, ctx.params.resourceUri);
              }
              break;

            case 'webacl.resource.removeRights':
              oldRecipients = await getRecipients(ctx, ctx.params.resourceUri);
              break;

            case 'webacl.resource.deleteAllRights':
              // Ensure the resource has not already been deleted (this action is used by the WebAclMiddleware when resources are deleted)
              const containerExist = await ctx.call('ldp.container.exist', { containerUri: ctx.params.resourceUri, webId: 'system' });
              const resourceExist = await ctx.call('ldp.resource.exist', { resourceUri: ctx.params.resourceUri, webId: 'system' });
              if (containerExist || resourceExist) {
                oldRecipients = await getRecipients(ctx, ctx.params.resourceUri);
              }
              break;
          }

          /*
           * ACTION CALL
           */
          actionReturnValue = await next(ctx);

          /*
           * AFTER HOOKS
           */
          switch (action.name) {
            case 'ldp.container.post': {
              const recipients = await getRecipients(ctx, actionReturnValue);
              if (recipients.length > 0) {
                await announce(ctx, actionReturnValue, recipients, {
                  type: ACTIVITY_TYPES.CREATE,
                  object: actionReturnValue,
                  target: ctx.params.containerUri
                });
              }
              break;
            }

            case 'ldp.resource.put': {
              const resourceUri = ctx.params.resource.id || ctx.params.resource['@id'];
              const recipients = await getRecipients(ctx, resourceUri);
              if (recipients.length > 0) {
                await announce(ctx, resourceUri, recipients, {
                  type: ACTIVITY_TYPES.UPDATE,
                  object: resourceUri
                });
              }
              break;
            }

            case 'ldp.resource.delete': {
              if (oldRecipients.length > 0) {
                await announce(ctx, ctx.params.resourceUri, oldRecipients, {
                  type: ACTIVITY_TYPES.DELETE,
                  object: ctx.params.resourceUri,
                  target: oldContainers
                });
              }
              break;
            }

            case 'webacl.resource.addRights': {
              if (ctx.params.additionalRights) {
                const newRecipients = await getRecipients(ctx, ctx.params.resourceUri);
                const recipientsAdded = newRecipients.filter(u => !oldRecipients.includes(u));
                if (recipientsAdded.length > 0) {
                  const containers = await ctx.call('ldp.resource.getContainers', { resourceUri: ctx.params.resourceUri });
                  await announce(ctx, ctx.params.resourceUri, recipientsAdded, {
                    type: ACTIVITY_TYPES.CREATE,
                    object: ctx.params.resourceUri,
                    target: containers
                  });
                }
              }
              break;
            }

            case 'webacl.resource.setRights': {
              const newRecipients = await getRecipients(ctx, ctx.params.resourceUri);
              const containers = await ctx.call('ldp.resource.getContainers', { resourceUri: ctx.params.resourceUri });

              const recipientsAdded = newRecipients.filter(u => !oldRecipients.includes(u));
              if (recipientsAdded.length > 0) {
                await announce(ctx, ctx.params.resourceUri, recipientsAdded, {
                  type: ACTIVITY_TYPES.CREATE,
                  object: ctx.params.resourceUri,
                  target: containers
                });
              }

              const recipientsRemoved = oldRecipients.filter(u => !newRecipients.includes(u));
              if (recipientsRemoved.length > 0) {
                await announce(ctx, ctx.params.resourceUri, recipientsRemoved, {
                  type: ACTIVITY_TYPES.DELETE,
                  object: ctx.params.resourceUri,
                  target: containers
                });
              }

              if (actionReturnValue.isContainer && actionReturnValue.addDefaultPublicRead) {
                const subUris = await ctx.call('ldp.container.getUris', { containerUri: ctx.params.resourceUri });
                // TODO check that sub-resources did not already have public read rights individually (must be done before)
                await announce(ctx, ctx.params.resourceUri, {
                  type: ACTIVITY_TYPES.CREATE,
                  object: subUris,
                  target: ctx.params.resourceUri
                });
              }

              if (actionReturnValue.isContainer && actionReturnValue.removeDefaultPublicRead) {
                const subUris = await ctx.call('ldp.container.getUris', { containerUri: ctx.params.resourceUri });
                // TODO check that sub-resources did not already have public read rights individually (must be done before)
                await announce(ctx, ctx.params.resourceUri, {
                  type: ACTIVITY_TYPES.DELETE,
                  object: subUris,
                  target: ctx.params.resourceUri
                });
              }

              break;
            }

            case 'webacl.resource.deleteAllRights':
            case 'webacl.resource.removeRights': {
              // If oldRecipients is not initialized, it means the resource has been deleted
              if (oldRecipients) {
                const newRecipients = await getRecipients(ctx, ctx.params.resourceUri);
                const recipientsRemoved = oldRecipients.filter(u => !newRecipients.includes(u));
                if (recipientsRemoved.length > 0 && !newRecipients.includes(PUBLIC_URI)) {
                  const containers = await ctx.call('ldp.resource.getContainers', { resourceUri: ctx.params.resourceUri });
                  await announce(ctx, ctx.params.resourceUri, recipientsRemoved, {
                    type: ACTIVITY_TYPES.DELETE,
                    object: ctx.params.resourceUri,
                    target: containers
                  });
                }
                break;
              }
            }
          }

          return actionReturnValue;
        };
      }

      // Do not use the middleware for this action
      return next;
    }),
    localEvent(next, event) {
      if (event.name === 'ldp.registry.registered') {
        return async (ctx) => {
          const { container } = ctx.params;
          if (!container.excludeFromMirror) watchedContainers.push(container);
          return next(ctx);
        };
      } else {
        return next;
      }
    }
  });
}

module.exports = ObjectsWatcherMiddleware;
