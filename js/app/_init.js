
define(function (require) {
  var Backbone = require('backbone'),
    Router = require('app/Routes');

  var app = new Router();
  Backbone.history.start();
});