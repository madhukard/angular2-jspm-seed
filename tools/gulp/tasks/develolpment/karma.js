'use strict';

var path = require('path');
var gulp = require('gulp');
var Server = require('karma').Server;
var config = require('../../config').watch;

gulp.task('test', function (done) {
  new Server({
    configFile: path.join(__dirname, '/../../../karma.conf.js')
  }, done).start();
});




