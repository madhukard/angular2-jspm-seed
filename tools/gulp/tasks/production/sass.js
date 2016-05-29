'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../../config').sass.production;
var globbing = require('gulp-css-globbing');
var debug = require('gulp-debug');

gulp.task('sass-deploy', function () {
  return gulp.src(config.source)
    .pipe(globbing({
      extensions: ['.scss']
    }))
    .pipe(debug({
      title: 'debug after globbing:'
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(config.dest));
});
