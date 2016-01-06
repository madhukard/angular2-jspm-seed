'use strict';

var path = require('path');
var gulp = require('gulp');
var Server = require('karma').Server;

function runTests(done) {
  new Server({
    configFile: path.join(__dirname, '/../../../../karma.conf.js'),
    singleRun: true,
    autoWatch: false,
    jspm: {
      config: 'app/jspm-config/config.js',
      packages: "target/development/jspm/",
      loadFiles: [
        'target/production/src/**/*.spec.js'
      ],
      serveFiles: [
        'target/production/src/**/!(*spec).js'
      ]
    },
    reporters: ['dots', 'coverage'],
    preprocessors: {"target/production/src/**/!(*spec).js": "coverage"}
  }, function (code) {
    if (code == 1) {
      console.log('Unit Test failures, exiting process');
      done('Unit Test Failures');
    } else {
      console.log('Unit Tests passed');
      done();
    }
  }).start();
}

gulp.task('test-deploy', function (done) {
  runTests(done);
});
