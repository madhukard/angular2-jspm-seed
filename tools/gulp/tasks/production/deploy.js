var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('deploy', function (callback) {
  runSequence('delete-deploy',
    'typescript-deploy',
    'typescript-dev',
    'deploy-templates',
    'production-jspm-config',
    //'test-deploy',
    [
      'sass-deploy',
      'scripts-bundle',
      'production-images'

    ],
    'delete-deploy-src',
    'html-deploy',
    callback);
});
