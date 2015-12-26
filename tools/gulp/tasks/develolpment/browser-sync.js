var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../../config').browsersync.development;
var historyApiFallback = require('connect-history-api-fallback');

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', function () {
  config.middleware = [historyApiFallback()];
  browsersync(config);
});
