Alterdot P2P
=======

[![NPM Package](https://img.shields.io/npm/v/alterdot-p2p.svg?style=flat-square)](https://www.npmjs.org/package/alterdot-p2p)
[![Build Status](https://github.com/Alterdot/alterdot-p2p/actions/workflows/test_and_release.yml/badge.svg)](https://github.com/Alterdot/alterdot-p2p/actions/workflows/test_and_release.yml)

`alterdot-p2p` adds Dash protocol support for Alterdot.

See [the main alterdot-lib repo](https://github.com/Alterdot/alterdot-lib) for more information.

## Getting Started

```sh
npm install alterdot-p2p
```
In order to connect to the Dash network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('alterdot-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bitcore guide](http://bitcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/Alterdot/alterdot-p2p/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/Alterdot/alterdot/blob/master/LICENSE).

Copyright 2013-2017 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.  
Copyright 2016-2017 The Dash Foundation, Inc.  
Copyright 2017-2018 Dash Core Group, Inc.  
