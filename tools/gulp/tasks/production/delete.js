var gulp = require('gulp');
var del = require('del');
var path = require('../../config').delete.production;
var deploySrc = path + '/src';
/**
 * Delete folders and files
 */
gulp.task('delete-deploy', function (callback) {
  del(path, callback);
});

gulp.task('delete-deploy-src', function (callback) {
  del(deploySrc, callback);
});
