define(function (require) {
    var _ = require('underscore'),
      $ = require('jquery'),
      Backbone = require('backbone'),
      myTemplate = require('text!app/templates/mytemplate.html'),
      View;

  View = Backbone.View.extend({

    el: '#js-view-region',

    template: myTemplate,

    initialize: function () {
      this.$el.html(_.template(this.template));
    }

  });

  return View;
});