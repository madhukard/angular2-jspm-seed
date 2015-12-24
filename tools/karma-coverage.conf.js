/* global module */
module.exports = function (config) {
  'use strict';
  config.set({
    autoWatch: false,
    singleRun: true,

    frameworks: ['jspm', 'jasmine'],

    files: [
      'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js',
      {pattern: 'app/assets/images/**/*.png', watched: false, included: false, served: true},
    ],

    jspm: {
      config: 'app/jspm-config/config-karma.js',
      loadFiles: [
        'build/coverage/js/**/*.js'
      ]
    },

    browsers: ['PhantomJS'],
    preprocessors: {
      'build/coverage/js/**/!(*spec).js': ['babel', 'sourcemap', 'coverage']
    },

    babelPreprocessor: {
      options: {
        sourceMap: 'inline',
        blacklist: ['useStrict']
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    proxies: {
      '/assets/images/': '/base/app/assets/images/'
    },
    reporters: ['coverage', 'dots'],

    coverageReporter: {
      instrumenters: {isparta: require('isparta')},
      instrumenter: {
        'build/test/js/**/*.js': 'isparta'
      },

      reporters: [
        {
          type: 'text-summary',
          subdir: normalizationBrowserName
        },
        {
          type: 'html',
          dir: 'coverage/',
          subdir: normalizationBrowserName
        }
      ]
    }
  });

  function normalizationBrowserName(browser) {
    return browser.toLowerCase().split(/[ /-]/)[0];
  }
};

