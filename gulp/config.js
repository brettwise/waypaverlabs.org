var dest = './siteleaf';
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      proxy: 'localhost:9292',
      baseDir: dest
    }
  },
  sass: {
    src: src + '/sass/*.{sass,scss}',
    watchAll: src + '/sass/**/*.{sass,scss}',
    dest: dest + '/css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images', // Used by the image-url helper
      errLogToConsole: true,
      sourceComments: 'normal'
    }
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  markup: {
    src: src + '/**/*.html',
    dest: dest
  },
  js: {
    src: src + "/js/**/*.js",
    watchAll: src + '/js/**/*.js',
    dest: dest + '/js'
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/global.coffee',
      dest: dest + '/js',
      outputName: 'global.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.hbs'],
      // list of modules to make require-able externally
      require: ['jquery', 'backbone/node_modules/underscore']
      // See https://github.com/greypants/gulp-starter/issues/87 for note about
      // why this is 'backbone/node_modules/underscore' and not 'underscore'
    }]
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/**/*.js',
    cssDest: dest + '/css',
    jsDest: dest + '/js',
    dest: dest
  }
};
