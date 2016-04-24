var gulp = require('gulp');
var del = require('del');
var path = require('../../config').delete.production;
var deploySrc = path + '/src/**/*.js';
/**
 * Delete folders and files
 */
gulp.task('delete-deploy', function () {
  return del(path);
});

gulp.task('delete-deploy-src', function () {
  return del(deploySrc);
});
