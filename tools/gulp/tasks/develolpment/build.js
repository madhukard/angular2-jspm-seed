var gulp = require('gulp');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build',
  gulp.series(
    'delete',
    'copy-dev',
    'html-dev',
    'sass-lint',
    'sass',
    'typescript-dev'
  )
);
