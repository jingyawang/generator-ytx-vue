'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = gulp.task('minify', function () {
  return gulp.src(config.paths.dest.release.scripts + '/' + config.filenames.release.scripts)
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
