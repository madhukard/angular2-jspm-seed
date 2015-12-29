'use strict';

var gulp = require('gulp');
var conf = require('../../config').typescript.production;
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var tsProject = typescript.createProject('tsconfig.json');

gulp.task('typescript-deploy', function () {
  return gulp.src(conf.scripts)
    .pipe(sourcemaps.init())
    .pipe(tslint())
    .pipe(tslint.report('prose', {emitError: false}))
    .pipe(typescript(tsProject))
    .pipe(gulp.dest(conf.dest))
});
