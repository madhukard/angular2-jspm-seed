/* global module */
module.exports = function (config) {
  'use strict';

  var glob = require("glob");
  var specsToLoad = glob.sync("target/development/src/**/*.spec.js");
  var filesToServe = glob.sync("target/development/src/**/*.@(js|html|css)");


  config.set({
    basePath: '../',
    autoWatch: true,
    autoWatchBatchDelay: 2000,
    singleRun: false,

    frameworks: ['jspm', 'jasmine'],

    files: [
      'node_modules/es6-shim/es6-shim.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js'
    ],

    jspm: {
      config: 'app/jspm-config/config.js',
      packages: "target/development/jspm/",
      loadFiles: specsToLoad,
      serveFiles: filesToServe
    },

    // proxied base paths
    proxies: {
      "/src/": "/base/target/development/src/"
    },

    // - Chrome, ChromeCanary, Firefox, Opera, Safari (only Mac), PhantomJS, IE (only Windows)
    browsers: ['PhantomJS'],

    reporters: ['dots', 'coverage'],

    preprocessors: {
      "target/development/src/**/!(*spec).js": "coverage"
    },

    coverageReporter: {
      dir: 'target/coverageReport',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'lcov' }
      ]
    }

  });

};
