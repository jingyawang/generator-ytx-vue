'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
// var connect = require('connect');
// var staticServer = connect();

module.exports = gulp.task('serve', function (next) {
  // staticServer.use(connect.static(staticServerPath)).listen(process.env.PORT || config.ports.staticServer, next);
  var options = {
    ui: {
      port: config.ports.uiServer, 
      weinre: {port: config.ports.weinre},
    },
    server: {
      baseDir: release ? RELEASE_FOLDER : BUILD_FOLDER
    },
    port: process.env.PORT || config.ports.staticServer,
  }

  browserSync(options, next);

});
