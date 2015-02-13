'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
// var livereload = require('gulp-livereload');

module.exports = gulp.task('watch', function () {
  // livereload.listen({port: config.ports.livereloadServer});
  gulp.watch(config.paths.src.livereload).on('change', function (file) {
    // livereload.changed(file.path);
    browserSync.reload(file.path);
  });


  // gulp.watch([config.paths.src.scripts], ['lint']);
  gulp.watch(config.paths.src.index, ['index']);
  gulp.watch(config.paths.src.stylesGlob, ['styles']);
  gulp.watch(config.paths.src.images, {nodir: true}, ['images']);
  gulp.watch(config.paths.src.sprites, ['sprites']);
});
