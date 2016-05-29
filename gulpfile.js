var requireDir = require('require-dir');
var gulp = require('gulp');
var FwdRef = require('undertaker-forward-reference');

gulp.registry(FwdRef());
requireDir('./tools/gulp/tasks', { recurse: true });
