
define(function (require) {
  var Backbone = require('backbone'),
	BooksWebappUtil = require("app/BooksWebappUtil"),
    Model = require('app/Model'),
    Collection = require("app/Collection"),
	Book = require("app/Book"),
	Books;

  Books = Collection.extend({	
	apiUrl: "/books/v1/volumes?q=python",
	callbacks: {
		fetch: {
			failure: function failure() { //TODO consider building into an overrided fetch function
				alert("Failed to load books. Please refresh the page or try again later."); //TODO More specific error handling
			}
		}
	},
	parse: function parse(data) {
		//TODO invalid data error handling
		this.kind = data.kind;
		this.totalItems = data.totalItems || data.items.length;
		return data.items;
	},
	url: function() {
		return BooksWebappUtil.getDefaultApiUrl() + this.apiUrl;
	},
    model: Book

  });

  return Books;
});