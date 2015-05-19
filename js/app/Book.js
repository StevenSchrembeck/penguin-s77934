
define(function (require) {
    var Backbone = require('backbone'),
		Model = require('app/Model'),
		Book;

  Book = Model.extend({
    defaults: {
		title: "Hello"
    }

  });

  return Book;
});