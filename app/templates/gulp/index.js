'use strict';

var fs = require('fs'),
  argv = require('yargs').argv,
  tasks = fs.readdirSync('./gulp/tasks/');

require('./config');

// --release flag when executing a task
global.release = argv.release;
global.serve = argv.serve

tasks.forEach(function (task) {
  require('./tasks/' + task);
});
