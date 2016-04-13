'use strict';

var gulp = require('gulp');
var manifest = require('gulp-manifest');
var gulpif = require('gulp-if');
var mergeStream = require('merge-stream');

module.exports = gulp.task('manifest', function(){
  mergeStream(
    gulp.src([
      config.paths.src.index, 
      'dist/' + config.filenames.release.scripts,
      'dist/' + config.filenames.release.lib
    ], {
      base: ''
    }),
    gulp.src([
      'dist/**/' + config.filenames.release.styles
    ], {
      base: ''
    })
  )
  .pipe(manifest({
    hash: true,
    preferOnline: false,
    network: ['*'],
    filename: 'appcache.manifest'
  }))
  .pipe(gulpif(release, gulp.dest(RELEASE_FOLDER), gulp.dest(BUILD_FOLDER)));
});