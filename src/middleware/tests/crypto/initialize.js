const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');
const urlJoin = require('url-join');
const { ServiceBroker } = require('moleculer');
const { AuthLocalService } = require('@semapps/auth');
const { CoreService } = require('@semapps/core');
const { WebAclMiddleware, CacherMiddleware } = require('@semapps/webacl');
const { WebIdService } = require('@semapps/webid');
const CONFIG = require('../config');
const { clearDataset } = require('../utils');

const initialize = async (port, withOldKeyStore = false) => {
  await clearDataset(CONFIG.MAIN_DATASET);
  await clearDataset(CONFIG.SETTINGS_DATASET);

  const baseUrl = `http://localhost:${port}/`;

  const broker = new ServiceBroker({
    middlewares: [CacherMiddleware(CONFIG.ACTIVATE_CACHE), WebAclMiddleware({ baseUrl })],
    logger: {
      type: 'Console',
      options: {
        level: 'error'
      }
    }
  });

  // Remove all actors keys
  await fse.emptyDir(path.resolve(__dirname, '../actors'));
  if (withOldKeyStore) {
    // Create a placeholder key to simulate the old key store (isMigrated is checked, if a key exists).
    fs.writeFileSync(path.resolve(__dirname, '../actors', 'placeholder.key'), '');
  }

  broker.createService({
    mixins: [CoreService],
    settings: {
      baseUrl,
      baseDir: path.resolve(__dirname, '..'),
      triplestore: {
        url: CONFIG.SPARQL_ENDPOINT,
        user: CONFIG.JENA_USER,
        password: CONFIG.JENA_PASSWORD,
        mainDataset: CONFIG.MAIN_DATASET
      },
      activitypub: false,
      webfinger: false,
      containers: ['/users'],
      void: false,
      mirror: false,
      api: {
        port
      }
    }
  });

  broker.createService({
    mixins: [AuthLocalService],
    settings: {
      baseUrl,
      jwtPath: path.resolve(__dirname, './jwt'),
      accountsDataset: CONFIG.SETTINGS_DATASET
    }
  });

  broker.createService({
    mixins: [WebIdService],
    settings: {
      usersContainer: urlJoin(baseUrl, 'users')
    }
  });

  // this.broker.createService(PodService, {
  //   settings: {
  //     baseUrl
  //   }
  // });

  await broker.start();
  broker.waitForServices(
    ['core', 'auth', 'webid', 'triplestore', 'keys', 'keys.container', 'keys.public-container', 'keys.migration'],
    10_000
  );

  if (withOldKeyStore) {
    fs.rmSync(path.resolve(__dirname, '../actors', 'placeholder.key'));
  }

  return { broker, baseUrl };
};

module.exports = initialize;
