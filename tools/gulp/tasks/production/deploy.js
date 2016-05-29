var gulp = require('gulp');
gulp.task('deploy', gulp.series(
  'delete-deploy',
  'html-deploy',
  'sass-deploy',
  'typescript-deploy',
  'test-deploy',
  'copy-deploy',
  'scripts-bundle',
  'delete-deploy-src'
));
