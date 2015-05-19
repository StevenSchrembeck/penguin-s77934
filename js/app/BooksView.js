define(function (require) {
    var _ = require('underscore'),
      $ = require('jquery'),
      Backbone = require('backbone'),
	  View = require("app/View"),
	  BooksView,
	  Book = require('app/Book'),
	  Books = require("app/Books"),	  
	  booksTemplate = require('text!app/templates/booksTemplate.html'); 

  BooksView = View.extend({	
	fetchAndRender: function fetchAndRender(fetchOptions) {
		var self = this,
		fetchCallbacks = {			
			error: function error() {
				if(fetchOptions && fetchOptions.error) {
					fetchOptions.error(); //preserve the original error callback passed in
				}
			},
			success : function success() {
				if(fetchOptions && fetchOptions.success) {
					fetchOptions.success(); //preserve the original success callback passed in
				}
				self.render();
			}
		};
		
		this.collection.fetch(fetchCallbacks);		
	},
    initialize: function initialize() {		
		if(this.collection.hasData()) {
			this.render();
		} else {
			this.fetchAndRender();
		}
		
    },
	render: function render() {
		var compiledBooksTemplate = _.template(this.template);
		this.$el.html(compiledBooksTemplate({ books: this.collection.models }));
	},  
	template: booksTemplate
  });

  return BooksView;
});