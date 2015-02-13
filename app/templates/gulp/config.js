global.SRC_FOLDER = 'app';
global.BUILD_FOLDER = 'build';
global.RELEASE_FOLDER = 'dist';
global.TMP_FOLDER = 'tmp';

global.config = {
  paths: {
    src: {
      index: SRC_FOLDER + '/index.html',
      assets: [SRC_FOLDER + '/fonts/**/*'],
      images: [SRC_FOLDER + '/images/**/*', '!' + SRC_FOLDER + '/images/**/*.png/**/*.{jpg,jpeg,png}'],
      sprites: SRC_FOLDER + '/images/**/*.png/**/*.{jpg,jpeg,png}',
      scripts: SRC_FOLDER + '/scripts/**/*.coffee',
      styles: SRC_FOLDER + '/styles/main.styl',
      stylesGlob: SRC_FOLDER + '/styles/**/*.styl',
      livereload: [BUILD_FOLDER + '/**/*', '!' + BUILD_FOLDER + '/fonts/**/*'],
      modules: './' + SRC_FOLDER + '/scripts/index.coffee'
    },
    dest: {
      build: {
        styles: BUILD_FOLDER,
        cssSprites: SRC_FOLDER + '/styles/sprites',
        scripts: BUILD_FOLDER,
        images: BUILD_FOLDER + '/images',
        assets: BUILD_FOLDER + '/fonts',
        index: BUILD_FOLDER,
        server: BUILD_FOLDER
      },
      release: {
        styles: RELEASE_FOLDER,
        cssSprites: SRC_FOLDER + '/styles/sprites',
        scripts: RELEASE_FOLDER,
        images: RELEASE_FOLDER + '/images',
        assets: RELEASE_FOLDER + '/fonts',
        index: RELEASE_FOLDER,
        server: RELEASE_FOLDER
      }
    }
  },
  filenames: {
    build: {
      styles: 'styles/bundle.css',
      scripts: 'bundle.js'
    },
    release: {
      styles: 'styles/bundle.min.css',
      scripts: 'bundle.min.js'
    }
  },
  ports: {
    staticServer: 9000,
    uiServer: 8081,
    weinre: 8080,
    livereloadServer: 35729
  }
};
