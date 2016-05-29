'use strict';

var path = require('path');
var gulp = require('gulp');
var glob = require("glob");
var Server = require('karma').Server;

function runTests(done) {
  var specsToLoad = glob.sync("target/production/src/**/*.spec.js");
  var filesToServe = glob.sync("target/production/src/**/*.@(js|html|css)");

  new Server({
    configFile: path.join(__dirname, '/../../../karma.conf.js'),
    singleRun: true,
    autoWatch: false,
    jspm: {
      config: 'app/jspm-config/config.js',
      packages: "target/development/jspm/",
      loadFiles: specsToLoad,
      serveFiles: filesToServe
    },
    proxies: {
      "/src/": "/base/target/production/src/"
    },
    reporters: ['dots', 'coverage'],
    preprocessors: {"target/production/src/**/!(*spec).js": "coverage"}
  }, function (code) {
    if (code == 1) {
      console.log('Unit Test failures, exiting process');
      done('Unit Test Failures');
    } else {
      console.log('Unit Tests passed');
      done();
    }
  }).start();
}

gulp.task('test-deploy', function (done) {
  runTests(done);
});
