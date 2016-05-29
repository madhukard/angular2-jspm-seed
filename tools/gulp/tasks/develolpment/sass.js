'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var globbing = require('gulp-css-globbing');
var config = require('../../config').sass.development;

var postcss = require('gulp-postcss');
var reporter = require('postcss-reporter');
var syntax_scss = require('postcss-scss');
var stylelint   = require('stylelint');
var debug = require('gulp-debug');

gulp.task('sass', function () {
  return gulp.src(config.source)
    .pipe(debug())
    .pipe(globbing({
      extensions: ['.scss']
    }))
    .pipe(debug())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest))
    .pipe(debug())
    .pipe(browserSync.stream());
});


gulp.task('sass-lint', function() {
  var styleLintConfig = {
    'rules': {
      'block-no-empty': true,
      'color-no-invalid-hex': true,
      'declaration-colon-space-after': 'always',
      'declaration-colon-space-before': 'never',
      'function-comma-space-after': 'always',
      'function-url-quotes': 'double',
      'media-feature-colon-space-after': 'always',
      'media-feature-colon-space-before': 'never',
      'media-feature-name-no-vendor-prefix': true,
      'max-empty-lines': 5,
      'number-leading-zero': 'never',
      'number-no-trailing-zeros': true,
      'property-no-vendor-prefix': true,
      'declaration-block-no-duplicate-properties': true,
      'block-no-single-line': true,
      'declaration-block-trailing-semicolon': 'always',
      'selector-list-comma-space-before': 'never',
      'selector-list-comma-newline-after': 'always',
      'selector-no-id': true,
      'string-quotes': 'double',
      'value-no-vendor-prefix': true
    }
  };

  var processors = [
    stylelint(styleLintConfig),
    reporter({
      clearMessages: true,
      throwError: true
    })
  ];

  return gulp.src(config.source)
    .pipe(postcss(processors, {syntax: syntax_scss}));
});
