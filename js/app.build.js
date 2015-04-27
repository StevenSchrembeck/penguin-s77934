
({
    appDir: "../",
    baseUrl: "js",
    dir: "../../penguin_compressed",
    paths: {
        "underscore":             "libs/underscore.min",
        backbone:                 "libs/backbone",
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
    },
    optimize: "uglify",
    skipDirOptimize: true,
    optimizeCss: "standard",
    modules: [
        {
            name: "app",
            exclude: [

            ]
        }
    ]
})
