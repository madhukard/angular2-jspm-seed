var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../../config').html.development;
var removeCode = require('gulp-remove-code');
var inject = require('gulp-inject');

gulp.task('html-dev', function () {
  return gulp.src(config.source)
    .pipe(removeCode({development: true}))
    .pipe(gulp.dest(config.dest));
});
