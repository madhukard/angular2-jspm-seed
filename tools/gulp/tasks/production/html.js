var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../../config').html.production;
var removeCode = require('gulp-remove-code');
var inject = require('gulp-inject');
var sources = gulp.src(config.dest + '/app.min.js', {read: false});
gulp.task('html-deploy', function () {

  return gulp.src(config.source)
    .pipe(removeCode({production: true}))
    .pipe(inject(sources, {ignorePath: config.dest}))
    .pipe(gulp.dest(config.dest));

});
