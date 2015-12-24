var gulp = require('gulp');
var path = require('../../config').typescript.production.dest;
var configPath = path + '/common';
var rename = require('gulp-rename');
/**
 * Move production jspm-config into place
 */

gulp.task('production-jspm-config', function () {
  return gulp.src(configPath + '/jspm-config-production.js')
    .pipe(rename('config.js'))
    .pipe(gulp.dest(configPath));
});
