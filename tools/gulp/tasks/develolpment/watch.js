var gulp = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', function () {
  gulp.watch(config.sass, gulp.series('sass'));
  gulp.watch(config.scripts, gulp.series('typescript-dev'));
  gulp.watch(config.html, gulp.series('html-dev'));
  gulp.watch(config.assets, gulp.series('copy-dev'));
});
