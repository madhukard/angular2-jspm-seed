var gulp = require('gulp');
var del = require('del');
var config = require('../../config');
/**
 * Delete folders and files
 */
gulp.task('delete', function () {
  return del(config.delete.development);
});
