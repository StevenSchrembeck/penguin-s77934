/* 
 * Place third party dependencies in the lib folder.
 * Configure loading modules from the lib directory or CDN.
*/
requirejs.config({
  baseUrl: "js/",
  paths: {
    "underscore":             "libs/underscore.min",
    backbone:                 "libs/backbone.min",
    "jquery":                 "libs/jquery-1.10.2.min",
    text:                     "libs/require.text"
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'app/_init': {
    	deps: ['jquery', 'underscore', 'backbone']
    }
  }
});

// Load the main app module to start the app
requirejs(["app/_init"]);

