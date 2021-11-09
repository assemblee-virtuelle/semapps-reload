const utils = require('./utils');

module.exports = {
  LdpService: require('./service'),
  LdpContainerService: require('./services/container'),
  LdpRegistryService: require('./services/registry'),
  LdpResourceService: require('./services/resource'),
  ResourcesWatcherBot: require('./bots/resources-watcher'),
  DocumentTaggerMixin: require('./mixins/document-tagger'),
  LdpAdapter: require('./adapter'),
  getContainerRoute: require('./routes/getContainerRoute'),
  ...utils
};
