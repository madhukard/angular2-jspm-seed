var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var path = require('../../config');
var insert = require('gulp-insert');

gulp.task('deploy-templates', function () {
  return gulp.src(path.app + '/src/**/*.html')
    .pipe(templateCache({root: '/src/', moduleSystem: 'Browserify', standalone: true}))
    //need to add an angular require to keep karma happy!
    .pipe(insert.prepend('var angular = require(\'angular\');'))
    .pipe(gulp.dest(path.typescript.production.dest));
});
