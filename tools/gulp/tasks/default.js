var gulp = require('gulp');

gulp.task('default', gulp.series(
  'build',
  gulp.parallel('browser-sync', 'watch', 'test')
));
