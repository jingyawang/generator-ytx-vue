'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var minifyHTML = require('gulp-minify-html');
var fs = require('fs');
var uglify = require('uglify-js');
var templateAutofit, templateStatistics;
var preprocess = require('gulp-preprocess');

if(release) {
  templateAutofit = uglify.minify('./gulp/templates/autofit.js').code,
  templateStatistics = uglify.minify('./gulp/templates/statistics.js').code;
} else {
  templateAutofit = fs.readFileSync('./gulp/templates/autofit.js', 'utf-8'),
  templateStatistics = fs.readFileSync('./gulp/templates/statistics.js', 'utf-8');
}

module.exports = gulp.task('index', function () {
  return gulp.src(config.paths.src.index)
    .pipe(replace('<!--百度统计-->', '<script>' + templateStatistics + '</script>'))
    .pipe(replace('<!--自适应调整-->', '<script>' + templateAutofit + '</script>'))
    .pipe(gulpif(release, minifyHTML({comments: true, empty: true, spare: true, quotes: true})))
    .pipe(gulpif(release,
      replace('<!--styles-->', '<link href="' + config.filenames.release.styles + '" rel="stylesheet">'),
      replace('<!--styles-->', '<link href="' + config.filenames.build.styles + '" rel="stylesheet">')
    ))
    .pipe(gulpif(release,
      replace('<!--scripts-->', '<script src="http://cdn.staticfile.org/lodash.js/3.10.1/lodash.min.js"></script><script src="' + config.filenames.release.lib + '"></script><script src="' + config.filenames.release.scripts + '"></script>'),
      replace('<!--scripts-->', '<script src="http://cdn.staticfile.org/lodash.js/3.10.1/lodash.min.js"></script><script src="' + config.filenames.build.lib + '"></script><script src="' + config.filenames.build.scripts + '"></script>')
    ))
    .pipe(gulpif(release,
      gulp.dest(config.paths.dest.release.index),
      gulp.dest(config.paths.dest.build.index)));
    });
