var gulp = require('gulp'),
    Lazy = require('lazy.js'),
    spritesmith = require('gulp.spritesmith'),
    path = require('path'),
    glob = require('glob'),
    glob2base = require('glob2base'),
    gulpif = require('gulp-if');
    imagemin = require('gulp-imagemin');
    mergeStream = require('merge-stream');
    basedir = null;

gulp.task('sprites', function(){
  var sprites = glob(config.paths.src.sprites);
  var stream = mergeStream();

  basedir = glob2base(sprites);
  sprites.on('end', function(files) {
    Lazy(files)
      .groupBy(function(file) {
          return file.slice(0, file.indexOf('.png/') + 4);
        })
      .map(generateSprite)
      .each(function(cssStream) {
        stream.add(cssStream);
      });
  });
  return stream;
});

function generateSprite(files, directory) {
  var name = path.basename(directory).slice(0, -4);
      spriteDist = path.join(
        config.paths.dest[release?'release':'build'].images, 
        path.relative(basedir, path.dirname(directory))
      );

  var sprite = gulp.src(files)
    .pipe(spritesmith({
        imgName: name + '.png',
        cssName: name + '.styl',
        cssSpritesheetName: name,
        padding: 2,
        imgPath: path.relative(SRC_FOLDER , directory),
        cssTemplate: './gulp/templates/stylus.template.mustache'
      }));

  sprite.img
    .pipe(gulpif(release, imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(spriteDist)); 
  return sprite.css.pipe(gulp.dest(config.paths.dest[release?'release':'build'].cssSprites));
}
