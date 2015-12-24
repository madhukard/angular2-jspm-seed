'use strict';

var path = require('path');
var gulp = require('gulp');

var karma = require('karma');

function runTests(done) {
  karma.server.start({
    configFile: path.join(__dirname, '/../../../karma.conf.js'),
    singleRun: true,
    autoWatch: false,
    reporters: ['dots']
  }, function (code) {
    if (code == 1) {
      console.log('Unit Test failures, exiting process');
      done('Unit Test Failures');
    } else {
      console.log('Unit Tests passed');
      done();
    }
  });
}

gulp.task('test-deploy', function (done) {
  runTests(done);
});
