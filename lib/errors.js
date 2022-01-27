'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on alterdot-p2p Module {0}'
};

module.exports = require('alterdot-lib').errors.extend(spec);
