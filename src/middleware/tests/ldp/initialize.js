const { ServiceBroker } = require('moleculer');
const { CoreService } = require('@semapps/core');
const { WebAclMiddleware } = require('@semapps/webacl');
const EventsWatcher = require('../middleware/EventsWatcher');
const CONFIG = require('../config');
const ontologies = require('../ontologies');

const containers = [
  {
    path: '/resources',
    dereference: ['pair:hasLocation', 'pair:hasTopic']
  },
  {
    path: '/organizations',
    dereference: ['pair:hasLocation'],
    disassembly: [{ path: 'pair:hasLocation', container: CONFIG.HOME_URL + 'places' }]
  },
  {
    path: '/places'
  },
  {
    path: '/themes'
  }
];

const initialize = async () => {
  const broker = new ServiceBroker({
    middlewares: [EventsWatcher, WebAclMiddleware],
    logger: {
      type: 'Console',
      options: {
        level: 'error'
      }
    }
  });

  await broker.createService(CoreService, {
    settings: {
      baseUrl: CONFIG.HOME_URL,
      triplestore: {
        url: CONFIG.SPARQL_ENDPOINT,
        user: CONFIG.JENA_USER,
        password: CONFIG.JENA_PASSWORD,
        mainDataset: CONFIG.MAIN_DATASET
      },
      ontologies,
      containers,
      activitypub: false
    }
  });

  // Drop all existing triples, then restart broker so that default containers are recreated
  await broker.start();
  await broker.call('triplestore.dropAll', { webId: 'system' });
  await broker.stop();
  await broker.start();

  // setting some write permission on the container for anonymous user, which is the one that will be used in the tests.
  await broker.call('webacl.resource.addRights', {
    webId: 'system',
    resourceUri: CONFIG.HOME_URL + 'resources',
    additionalRights: {
      anon: {
        write: true
      }
    }
  });

  await broker.call('webacl.resource.addRights', {
    webId: 'system',
    resourceUri: CONFIG.HOME_URL + 'organizations',
    additionalRights: {
      anon: {
        write: true
      }
    }
  });

  await broker.call('webacl.resource.addRights', {
    webId: 'system',
    resourceUri: CONFIG.HOME_URL + 'places',
    additionalRights: {
      anon: {
        write: true
      }
    }
  });

  await broker.call('webacl.resource.addRights', {
    webId: 'system',
    resourceUri: CONFIG.HOME_URL + 'themes',
    additionalRights: {
      anon: {
        write: true
      }
    }
  });

  return broker;
};

module.exports = initialize;
