
define(function (require) {
    var Backbone = require('backbone'),
    Model;

  Model = Backbone.Model.extend({
    defaults: {
		title: "Hello"
    }

  });

  return Model;
});