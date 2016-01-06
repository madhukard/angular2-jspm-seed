var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var insert = require('gulp-insert');
var browserSync = require('browser-sync');
var conf = require('../../config').html.development;

gulp.task('dev-templates', function () {
  return gulp.src(conf.source)
    .pipe(templateCache({root: '/src/', moduleSystem: 'Browserify', standalone: true}))
    //need to add an angular require to keep karma happy!
    .pipe(insert.prepend('var angular = require(\'angular\');'))
    .pipe(gulp.dest(conf.dest))
    .pipe(browserSync.stream());
});
