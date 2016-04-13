'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');
var coffeeify = require('coffeeify');
var vueify = require('vueify');
var bowermain = require('main-bower-files');
var combine = require('combined-stream');
var fs = require('fs');
var envify = require('envify/custom');

module.exports = gulp.task('browserify', function () {
  var stream = combine.create();
 
  var bundle = browserify({
        entries: [config.paths.src.modules],
        extensions: ['.js', '.coffee', '.vue']
      })
      .transform(coffeeify)
      .transform(browserifyShim)
      .transform(vueify)
      .transform(envify({_: 'purge'}))
      .bundle();

  bowermain().forEach(function(path){
    stream.append(fs.createReadStream(path));
  });
  console.log(bowermain());
  console.log("!!!!!!!!!!!!!!!!!!")
  stream.pipe(source(config.filenames.release.lib))
  .pipe(gulp.dest(RELEASE_FOLDER));

  combine.create()
    .append(bundle)
    .pipe(source(config.filenames.release.scripts))
    .pipe(gulp.dest(RELEASE_FOLDER));

});
