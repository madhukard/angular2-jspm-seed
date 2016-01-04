/* global module */
module.exports = function (config) {
  'use strict';
  config.set({
    autoWatch: true,
    singleRun: false,

    frameworks: ['jspm', 'jasmine'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js'
    ],

    jspm: {
      config: 'app/jspm-config/config.js',
      packages: "target/development/jspm/",
      loadFiles: [
        'target/development/src/**/*.spec.js'
      ],
      serveFiles: [
        'target/development/src/**/!(*spec).js'
      ]
    },

    browsers: ['PhantomJS'],

    reporters: ['dots']

  });

};
