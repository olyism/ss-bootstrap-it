module.exports = (gulp) => {

  const babel       = require('gulp-babel');
  const cat         = require('gulp-concat');
  const jshint      = require('gulp-jshint');
  const sourcemaps  = require('gulp-sourcemaps');
  const uglify      = require('gulp-uglify');
  const rename      = require('gulp-rename');
  const streamqueue = require('streamqueue');
  const util        = require('gulp-util');

  // Bootstrap JS plugins
  // Uncomment plugins you'd like to include into your project @see http://getbootstrap.com/javascript/
  // Please also remember to import the respective sass partials from _objects.bootstrap.scss
  const BS_PLUGINS = [
    // 'affix',
    // 'alert',
    // 'button',
    // 'carousel',
    'collapse',
    'dropdown',
    // 'modal',
    // 'popover',
    // 'scrollspy',
    // 'tab',
    // 'tooltip',
    'transition',
  ];

  const PATH = {
    BOOTSTRAP: getBootstrapPlugins(),
    JQUERY: 'node_modules/jquery/dist/jquery.min.js',
    SRC: ['javascript/**/*.js', '!javascript/**/*.min.js', '!javascript/**/main.js'],
  };

  const THIRDPARTY = [
    'node_modules/html5shiv/dist/html5shiv.min,js',
    'node_modules/respond.js/dest/respond.min.js',
  ];

  gulp.task('js', ['jshint'], () => {
    return streamqueue({ objectMode: true },
      gulp.src([].concat(PATH.JQUERY, PATH.BOOTSTRAP)),
      gulp.src(PATH.SRC)
       .pipe(sourcemaps.init())
       .pipe(babel({ presets:['es2015'] }))
    )
      .pipe(cat('main.js'))
      .pipe(uglify())
      .pipe(rename({suffix:'.min'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('javascript/'));
  });

  // Copies vendor files to the thirdparty folder
  gulp.task('js:thirdparty', () => {
    gulp.src(THIRDPARTY)
      .pipe(gulp.dest('thirdparty/'));
  });

  gulp.task('jshint', () => {
    gulp.src(PATH.SRC)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  gulp.task('js:build', ['js', 'js:thirdparty']);


  /**
   * Returns all the Bootstrap JS plugins with their respective path under `node_modules`
   *
   * @return {array|string}
   */
  function getBootstrapPlugins() {
    let paths = [],
        path = 'node_modules/bootstrap-sass/assets/javascripts/bootstrap';

    for (let plugin of BS_PLUGINS) {
      paths.push(`${path}/${plugin}.js`);
    }

    return paths;
  }
};
