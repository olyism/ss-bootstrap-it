// global settings
const GLOBAL = {
  // support for legacy IE, if true polyfill scripts will be bundled and loaded
  ie8: true,
};

// paths
const PATHS = {
  // source files
  src: {
    css: './scss',
    js: './javascript/**/*.js',
    polyfills: './thirdparty/polyfills/**/*.js'
  },

  // dist files
  dist: {
    css: './dist/css',
    js: './dist/js'
  }
};

// module configs
const CONFIG = {
  // browserify configs
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
      {
        entries: './javascript/main.js',
        dest: PATHS.DIST.JS,
        outputName: 'bundle.js'
      }
    ],
    extensions: ['.js']
  },

  // eslint, using airbnb standards
  eslint: {
    configFile: '.eslintrc'
  },

  // gulp-modernizr config @see https://github.com/Modernizr/customizr#config-file
  modernizr: {
    // Avoid unnecessary builds (see Caching section below)
    "cache": true,

    // Path to the build you're using for development.
    "devFile": false,

    // Path to save out the built file
    "dest": false,

    // Based on default settings on http://modernizr.com/download/
    "options": [
      "setClasses",
      "addTest",
      "html5printshiv",
      "testProp",
      "fnBind"
    ],

    // By default, source is uglified before saving
    "uglify": true,

    // Define any tests you want to explicitly include
    "tests": [
      "svg"
    ],

    // Useful for excluding any tests that this tool will match
    // e.g. you use .notification class for notification elements,
    // but don’t want the test for Notification API
    "excludeTests": [
      // exclude hidden because Bootstrap utility already has this class
      // will re-enable after `classPrefix` feature is added https://github.com/Modernizr/customizr/issues/20
      'hidden'
    ],

    // By default, will crawl your project for references to Modernizr tests
    // Set to false to disable
    "crawl": true,

    // Set to true to pass in buffers via the "files" parameter below
    "useBuffers": false,

    // By default, this task will crawl all *.js, *.css, *.scss files.
    // Commented out as I've already defined this in gulp.src()
    // "files" : {
    //   "src": [
    //     "*[^(g|G)runt(file)?].{js,css,scss}",
    //     "**[^node_modules]/**/*.{js,css,scss}",
    //     "!lib/**/*"
    //   ]
    // },

    // Have custom Modernizr tests? Add them here.
    "customTests": []
  }
};

module.exports = {
  global: GLOBAL,
  paths: PATHS,
  config: CONFIG
};
