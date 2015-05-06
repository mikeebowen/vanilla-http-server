'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
require('../index.js');

describe('Server Check', function () {
  it('Should send a 404 error when entering a random link', function (done) {
    chai.request('localhost:3000').get('/' + Math.random()).end(function (err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(404);
      done();
    });
  });

  it('Should show Hello Fred. How are you today?', function (done) {
    chai.request('localhost:3000').get('/greet/Fred').end(function (err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.body.msg).to.eql('Hello Fred. How are you today?');
      done();
    });
  });

  it('Should show the current time', function (done) {
    var currentTime = new Date();
    chai.request('localhost:3000').get('/time').end(function (err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.body.msg).to.eql('The current date and time is: ' + currentTime);
      done();
    });
  });

});
