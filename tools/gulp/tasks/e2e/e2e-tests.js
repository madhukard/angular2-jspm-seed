'use strict';

var gulp = require('gulp');
var protractor = require('gulp-protractor');
var conf = require('../../config');
var browserSync = require('browser-sync');


// Downloads the selenium webdriver
gulp.task('webdriver-update', protractor.webdriver_update);

gulp.task('webdriver-standalone', protractor.webdriver_standalone);

function runProtractor(done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3], params[4]] : [];

  gulp.src(conf.app + '/e2e/**/*.spec.js')
    .pipe(protractor.protractor({
      configFile: 'protractor.conf.js',
      args: args
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}

gulp.task('e2e', ['typescript-e2e', 'webdriver-update'], runProtractor);
