var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../../config').browsersync.development;
var url = require('url');

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', function () {
  browsersync(config);
});
