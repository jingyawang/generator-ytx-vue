'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');



module.exports = gulp.task('styles', function () {
  return gulp.src(config.paths.src.styles)
  	.pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['Android >= 4', 'iOS >= 6', 'last 2 versions'],
      remove: false
    }))
    .pipe(gulpif(release, csso()))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
