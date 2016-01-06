/*globals module,process,require */
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

    // - Chrome, ChromeCanary, Firefox, Opera, Safari (only Mac), PhantomJS, IE (only Windows)
    browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],

    reporters: ['dots', 'coverage'],

    preprocessors: {"target/development/src/**/!(*spec).js": "coverage"},
    coverageReporter: {
      dir: 'target/coverageReport',

      reporters: [
        {type: 'json'},
        {type: 'lcov'}
      ]
    }

  });

};
