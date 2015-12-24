var gulp = require('gulp');
var path = require('../../config').images.production;
/**
 * Move assets, eg. images into place
 */

gulp.task('production-images', function () {
  return gulp.src(path.source)
    .pipe(gulp.dest(path.dest));
});
