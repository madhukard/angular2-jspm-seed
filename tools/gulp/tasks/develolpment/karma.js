'use strict';

var path = require('path');
var gulp = require('gulp');
var Server = require('karma').Server;
var config = require('../../config').watch;
var del = require('del');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('test', function (callback) {
  runSequence(
    ['run-tests'],
    callback);
});

gulp.task('run-tests', [], function (done) {
  runTests(done);
});

function runTests(done) {
  new Server({
    configFile: path.join(__dirname, '/../../../../karma.conf.js')
  }, done).start();
}


