'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function () {
  if (release) {
    runSequence(
      'clean',
      'browserify',
      'index', 
      'styles', 
      'images', 
      'assets',
      'minify',
      'manifest'
    );
  } else {
    runSequence(
      'clean',
      'index', 
      'styles', 
      'images', 
      'assets',
      'watchify', 
      'watch', 
      'serve',
      'minify',
      'manifest'
    );
  }
});