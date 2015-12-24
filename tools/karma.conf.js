/* global module */
module.exports = function (config) {
  'use strict';
  config.set({
    autoWatch: true,
    singleRun: false,

    frameworks: ['jspm', 'jasmine'],

    files: [
      'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js',
      {pattern: 'app/assets/images/**/*.png', watched: false, included: false, served: true},
    ],

    jspm: {
      config: 'app/jspm-config/config-karma.js',
      loadFiles: [
        'build/development/**/*.js'
      ]
    },

    browsers: ['PhantomJS'],

    proxies: {
      '/assets/images/': '/base/app/assets/images/'
    },
    reporters: ['dots'],

  });

};
