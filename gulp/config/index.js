module.exports = {
  // support for legacy IE, if true polyfill scripts will be bundled and loaded
  ie8: true,

  // common paths
  paths: {
    src: {
      js: './javascript/**/*.js'
    }
  },

  // browserify configs
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
      {
        entries: './javascript/main.js',
        dest: `./dist/js`,
        outputName: 'bundle.js'
      }
    ],
    extensions: ['.js']
  },
  eslint: {
    configFile: '.eslintrc'
  }
};
