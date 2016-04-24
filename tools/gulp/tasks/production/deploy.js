var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('deploy', function (callback) {
  runSequence('delete-deploy',
    'typescript-deploy',
    'deploy-templates',
    'production-jspm-config',
    //'test-deploy',
    'sass-deploy',
    'production-images',
    'copy-deploy',
    'scripts-bundle',
    'delete-deploy-src',
    'html-deploy',
    callback);
});
