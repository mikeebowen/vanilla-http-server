'use strict';

exports = module.exports = {};
var http = require('http');
var url = require('url');

function startServer (route) {
  function onRequest (req, res) {
    // get entered URL
    var pathname = url.parse(req.url).pathname;
    var pathnameArray = pathname.split('/');
    if (pathname === '/time') {
      var todaysDate = new Date();
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({msg: 'The current date and time is: ' + todaysDate}));
      res.end();
    } else if (pathnameArray[1] === 'greet' && pathnameArray[2] && req.method === 'POST') {
      console.log('it is a post request');
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({msg: 'Hello ' + pathnameArray[2] + '. How are you today?'}));
      res.end();
    } else if (pathnameArray[1] === 'greet' && pathnameArray[2] && req.method === 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({msg: 'Hello ' + pathnameArray[2] + '. How are you today?'}));
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
