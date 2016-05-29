'use strict';

var gulp = require('gulp');
var conf = require('../../config').typescript.production;
var tsLintConf = require('../../../tslint.json');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
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

gulp.task('typescript-deploy', function () {
  return gulp.src(conf.scripts)
    .pipe(sourcemaps.init())
    .pipe(tslint({
      configuration: tsLintConf
    }))
    .pipe(tslint.report('prose', {emitError: false}))
    .pipe(typescript(tsProject))
    .pipe(gulp.dest(conf.dest))
});
