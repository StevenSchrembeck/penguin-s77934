define(function (require) {
    var _ = require('underscore'),
      $ = require('jquery'),
      Backbone = require('backbone'),
      View;

  View = Backbone.View.extend({

    el: '#js-view-region',

  });

  return View;
});