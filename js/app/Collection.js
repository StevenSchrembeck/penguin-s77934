
define(function (require) {
  var Backbone = require('backbone'),
    Model = require('app/Model'),
    Collection;

  Collection = Backbone.Collection.extend({
	hasData: function hasData() {
		return !!(this.models && this.models.length);
	},
    model: Model
  });

  return Collection;
});