'use strict';

exports = module.exports = {};
var http = require('http');
var url = require('url');

function startServer (route) {
  function onRequest (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    res.write('hello world test');
    res.end();
  }
  http.createServer(onRequest).listen(3000);
  console.log('Server has started');
}



exports.startServer = startServer;
