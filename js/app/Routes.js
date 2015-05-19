define(function (require) {
  var Backbone = require('backbone'),
    BooksView = require('app/BooksView'),
    Books = require('app/Books'),
    Book = require('app/Book'),
    AppRouter;

  AppRouter = Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function() {
		var books = new Books(),
			booksView;
		booksView = new BooksView({ collection: books });
    }
  });

  return AppRouter;
});