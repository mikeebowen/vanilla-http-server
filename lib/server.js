'use strict';

exports = module.exports = {};
var http = require('http');
var url = require('url');
var date = require('./date.js');

function startServer (route) {
  function onRequest (req, res) {
    // get entered URL
    var pathname = url.parse(req.url).pathname;
    // write 200 to head and let server know it will be text/plain content
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('Request for ' + pathname + ' received.');
    if (pathname === '/time') {
    var todaysDate = date.showDate();
    res.write('The current date and time is: ' + todaysDate);
    res.end();
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('404 Page Not Found');
      res.end();
    }
  }
  http.createServer(onRequest).listen(3000);
  console.log('Server has started');
}



exports.startServer = startServer;
