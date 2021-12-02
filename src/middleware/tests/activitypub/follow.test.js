const { ACTIVITY_TYPES, OBJECT_TYPES } = require('@semapps/activitypub');
const { MIME_TYPES } = require('@semapps/mime-types');
const initialize = require('./initialize');
const CONFIG = require('../config');

jest.setTimeout(50000);

let broker;

beforeAll(async () => {
  broker = await initialize();
});
afterAll(async () => {
  if (broker) await broker.stop();
});

describe('Posting to followers', () => {
  let simon, sebastien, followActivity;

  test('Create actor', async () => {
    let { webId: sebastienUri } = await broker.call('auth.signup', {
      username: "srosset81",
      email: "sebastien@test.com",
      password: "test",
      name: "Sébastien"
    });

    sebastien = await broker.call('activitypub.actor.awaitCreateComplete', { actorUri: sebastienUri });

    let { webId: simonUri } = await broker.call('auth.signup', {
      username: "simonlouvet",
      email: "simon@test.com",
      password: "test",
      name: "Simon"
    });

    simon = await broker.call('activitypub.actor.awaitCreateComplete', { actorUri: simonUri });

    expect(sebastienUri).toBe(`${CONFIG.HOME_URL}actors/srosset81`);

    expect(sebastien).toMatchObject({
      id: sebastienUri,
      type: ['Person', 'foaf:Person'],
      preferredUsername: 'srosset81',
      'foaf:nick': 'srosset81',
      inbox: sebastienUri + '/inbox',
      outbox: sebastienUri + '/outbox',
      followers: sebastienUri + '/followers',
      following: sebastienUri + '/following'
    });
  });

  test('Follow user', async () => {
    followActivity = await broker.call('activitypub.outbox.post', {
      collectionUri: sebastien.outbox,
      '@context': 'https://www.w3.org/ns/activitystreams',
      actor: sebastien.id,
      type: ACTIVITY_TYPES.FOLLOW,
      object: simon.id,
      to: [simon.id, sebastien.id + '/followers']
    });

    expect(followActivity).toMatchObject({
      type: ACTIVITY_TYPES.FOLLOW,
      actor: sebastien.id,
      object: simon.id
    });

    // Wait for actor to be added to the followers collection
    await broker.watchForEvent('activitypub.follow.added');

    let result = await broker.call('activitypub.follow.listFollowers', {
      collectionUri: simon.followers
    });

    expect(result.items).toContain(sebastien.id);

    result = await broker.call('activitypub.inbox.list', {
      collectionUri: sebastien.inbox,
      page: 1
    });

    expect(result.orderedItems).toHaveLength(1);

    expect(result.orderedItems[0]).toMatchObject({
      type: ACTIVITY_TYPES.ACCEPT,
      actor: simon.id,
      object: {
        type: ACTIVITY_TYPES.FOLLOW,
        object: simon.id
      }
    });
  });

  test('Send message to followers', async () => {
    let result = await broker.call('activitypub.outbox.post', {
      collectionUri: simon.outbox,
      '@context': 'https://www.w3.org/ns/activitystreams',
      type: OBJECT_TYPES.NOTE,
      name: 'Hello World',
      attributedTo: simon.id,
      to: [simon.followers],
      content: 'Voilà mon premier message, très content de faire partie du fedivers !'
    });

    expect(result).toMatchObject({
      type: ACTIVITY_TYPES.CREATE,
      object: {
        type: OBJECT_TYPES.NOTE,
        name: 'Hello World'
      }
    });

    // Wait for message to be received by all followers
    await broker.watchForEvent('activitypub.inbox.received');

    result = await broker.call('activitypub.inbox.list', {
      collectionUri: sebastien.inbox,
      page: 1
    });

    expect(result.orderedItems).toHaveLength(2);
  });

  test('Unfollow user', async () => {
    let result = await broker.call('activitypub.outbox.post', {
      collectionUri: sebastien.outbox,
      '@context': 'https://www.w3.org/ns/activitystreams',
      actor: sebastien.id,
      type: ACTIVITY_TYPES.UNDO,
      object: followActivity,
      to: [simon.id, sebastien.id + '/followers']
    });

    // Wait for actor to be removed to the followers collection
    await broker.watchForEvent('activitypub.follow.removed');

    expect(result).toMatchObject({
      type: ACTIVITY_TYPES.UNDO,
      actor: sebastien.id,
      object: {
        type: ACTIVITY_TYPES.FOLLOW,
        object: simon.id
      }
    });

    result = await broker.call('activitypub.follow.listFollowers', {
      collectionUri: simon.followers
    });

    expect(result.items).toHaveLength(0);
  });
});
