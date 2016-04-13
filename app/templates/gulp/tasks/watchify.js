'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');
var coffeeify = require('coffeeify');
var vueify = require('vueify');
var bowermain = require('main-bower-files');
var combine = require('combined-stream');
var fs = require('fs');
var envify = require('envify/custom');
var Lazy = require('lazy.js');

module.exports = gulp.task('watchify', function () {
  var options = Lazy(watchify.args).extend({
          entries: [config.paths.src.modules],
          extensions: ['.js', '.coffee', '.vue']
        }).toObject();
  var bundler = watchify(browserify(options));

  bundler.transform(coffeeify);
  bundler.transform(browserifyShim);
  bundler.transform(vueify);
  bundler.transform(envify({_: 'purge'}));
  bundler.on('update', rebundle);
  gulp.watch('bower.json', rebundle);

  function rebundle() {
    combine.create()
      .append(bundler.bundle()).on('error',function(data){
        console.log(data)
      })
      .pipe(source(config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.build.scripts));
      
    bower2stream()
     // gulp.src(config.paths.dest.build+'bundle.js').pipe(uglify()).pipe(gulp.dest(config.paths.dest.build.scripts))
  }

  function bower2stream() {
    var stream = combine.create();
    bowermain().forEach(function(path){
      stream.append(fs.createReadStream(path));
    });
    return stream.pipe(source(config.filenames.build.lib)).pipe(gulp.dest(config.paths.dest.build.scripts));
  }


  return rebundle();
});
