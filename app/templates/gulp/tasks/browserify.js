'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');
var coffeeify = require('coffeeify');
var vueify = require('vueify');

module.exports = gulp.task('browserify', function () {
  return browserify({
      entries: [config.paths.src.modules],
      extensions: ['.js', '.coffee', '.vue']
    })
    .transform(coffeeify)
    .transform(browserifyShim)
    .transform(vueify)
    .bundle()
    .pipe(source(config.filenames.release.scripts))
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
