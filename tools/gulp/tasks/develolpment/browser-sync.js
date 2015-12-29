var gulp = require('gulp');
var browserSync = require('browser-sync');
var spa         = require("browser-sync-spa");
var config = require('../../config').browsersync.development;

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', function () {
  browserSync.use(spa({
    selector: "[ng-app]",
    history: {
      index: '/index.html'
    }
  }));
  browserSync(config);
});
