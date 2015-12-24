'use strict';

var path = require('path');
var gulp = require('gulp');
var karma = require('karma');
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
  karma.server.start({
    configFile: path.join(__dirname, '/../../../karma.conf.js')
  }, function () {
    done();
  });
}

function runCoverageTests(done) {
  karma.server.start({
    configFile: path.join(__dirname, '/../../../karma-coverage.conf.js')
  }, function () {
    done();
  });
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
