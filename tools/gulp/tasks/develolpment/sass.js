'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var browserSync = require('browser-sync');
var globbing = require('gulp-css-globbing');
var config = require('../../config').sass.development;
gulp.task('sass', function () {
  return gulp.src(config.source)
    .pipe(globbing({
      extensions: ['.scss']
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});
