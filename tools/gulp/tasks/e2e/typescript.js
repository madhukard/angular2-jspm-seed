'use strict';

var gulp = require('gulp');
var conf = require('../../config').typescript.e2e;
var tsLintConf = require('../../../tslint.json');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var cache = require('gulp-cached');
var browserSync = require('browser-sync');
var tsProject = typescript.createProject({
  "target": "es5",
  "module": "commonjs",
  "moduleResolution": "node",
  "sourceMap": true,
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true,
  "removeComments": false,
  "noImplicitAny": true,
  "suppressImplicitAnyIndexErrors": true,
  "isolatedModules": true
});

gulp.task('typescript-e2e', function () {
  return gulp.src(conf.scripts)
    .pipe(cache('typescript'))
    .pipe(sourcemaps.init())
    .pipe(tslint({
      configuration: tsLintConf
    }))
    .pipe(tslint.report('prose', {emitError: false}))
    .pipe(typescript(tsProject))
    //.pipe(sourcemaps.write('./maps', {includeContent: false, sourceRoot: '/app/src'}))
    .pipe(gulp.dest(conf.dest))
    .pipe(browserSync.stream());
});
