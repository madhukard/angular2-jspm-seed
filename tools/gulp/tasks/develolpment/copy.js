var gulp = require('gulp');
var replace = require('gulp-replace');
var conf = require('../../config').copy.development;

/**
 * Copy assets, html, jspm config & index.html from app directory to development directory
 */
gulp.task('copy-dev', function () {
  gulp
    .src([conf.assets])
    .pipe(gulp.dest(conf.dest + '/assets'));

  gulp
    .src(conf.vendorFiles)
    .pipe(gulp.dest(conf.dest + '/vendor'));

  return gulp
    .src([conf.js])
    .pipe(replace('"github:*": "target/development/jspm/github/*"', '"github:*": "jspm/github/*"'))
    .pipe(replace('"npm:*": "target/development/jspm/npm/*"', '"npm:*": "jspm/npm/*"'))
    .pipe(gulp.dest(conf.dest));
});
