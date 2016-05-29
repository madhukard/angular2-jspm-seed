var gulp = require('gulp');
var replace = require('gulp-replace');
var conf = require('../../config').copy.production;

/**
 * Copy assets & vendor files to production directory
 */
gulp.task('copy-deploy', function () {
  gulp
    .src([conf.sharedAssets])
    .pipe(gulp.dest(conf.dest + '/assets'));

  return gulp
    .src([conf.assets])
    .pipe(gulp.dest(conf.dest + '/assets'));

  /*return gulp
    .src(conf.vendorFiles)
    .pipe(gulp.dest(conf.dest + '/vendor'));*/
});
