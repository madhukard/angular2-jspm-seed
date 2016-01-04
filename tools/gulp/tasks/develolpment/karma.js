'use strict';

var path = require('path');
var gulp = require('gulp');
var Server = require('karma').Server;
var config = require('../../config').watch;
var del = require('del');
var deletePath = require('../../config').delete.coverage;
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('test', function (callback) {
  runSequence(
    ['run-tests'],
    callback);
});

gulp.task('coverage', function (callback) {
  runSequence('delete-coverage', 'dev-templates',
    ['run-tests-coverage'],
    callback);
});

function runTests(done) {
  new Server({
    configFile: path.join(__dirname, '/../../../../karma.conf.js')
  }, done).start();
}

function runCoverageTests(done) {
  new Server({
    configFile: path.join(__dirname, '/../../../../karma-coverage.conf.js'),
    singleRun: true
  }, done).start();
}

gulp.task('run-tests-coverage', ['typescript-karma-coverage'], function (done) {
  runCoverageTests(done);
});

gulp.task('run-tests', [], function (done) {
  //gulp.watch(jspm-config.scripts, ['typescript-karma']);
  runTests(done);
});

/**
 * Delete test folders and files
 */
gulp.task('delete-coverage', function (callback) {
  del(deletePath, callback);
});
