'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var preprocess = require('gulp-preprocess');
var gulpif = require('gulp-if');

module.exports = gulp.task('minify', function () {
  // gulp.src(config.paths.dest.build.scripts + '/' + config.filenames.build.lib)
  //.pipe(uglify())
  //.pipe(gulp.dest(config.paths.dest.build.scripts));
 	
	gulp.src(config.paths.dest.release.scripts + '/' + config.filenames.release.lib)
	    .pipe(uglify())
	    .pipe(gulp.dest(RELEASE_FOLDER));

	gulp.src(config.paths.dest.release.scripts + '/' + config.filenames.release.scripts)
	    .pipe(uglify())
			.pipe(gulp.dest(RELEASE_FOLDER));
});
