var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function (callback) {
  runSequence('delete',
    'copy-dev',
    'html-dev',
    'typescript-dev',
    [
      'dev-templates',
      'sass'
    ],
    callback);
});
