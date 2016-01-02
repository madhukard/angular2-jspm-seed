var gulp = require('gulp');
var replace = require('gulp-replace');
var conf = require('../../config').copy.production;

/**
 * Copy vendor files to production directory
 */
gulp.task('copy-deploy', function () {
  gulp
    .src(conf.vendorFiles)
    .pipe(gulp.dest(conf.dest + '/vendor'));
});
