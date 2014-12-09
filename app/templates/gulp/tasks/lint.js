'use strict';

var gulp = require('gulp');
var coffeelint = require('gulp-coffeelint');

module.exports = gulp.task('lint', function () {
  return gulp.src(config.paths.src.scripts)
  .pipe(coffeelint())
  .pipe(coffeelint.reporter());
});
