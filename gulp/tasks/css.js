module.exports = function (gulp) {

  const autoprefixer = require('autoprefixer');
  const cssnano      = require('cssnano');
  const postcss      = require('gulp-postcss');
  const sass         = require('gulp-sass');
  const sassLint     = require('gulp-sass-lint');
  const sourcemaps   = require('gulp-sourcemaps');
  const browserSync  = require('browser-sync').create();

  const SCSS = 'scss/**/*.scss';

  const CONFIG = {
    POSTCSS: [
      autoprefixer({ browsers: ['last 2 versions', 'ie 8-9'] }),
      cssnano(),
    ],
    SASS: {
      includePaths: 'node_modules/bootstrap-sass/assets/stylesheets',
    },
    SASSLINT: {
      // Airbnb scss lint @see https://github.com/airbnb/css/blob/master/.scss-lint.yml
      config: 'gulp/config/.scss-lint.yml',
      files: {
        // Please provide reasons for disabling linting
        ignore: [
          'scss/utilities/**/*.scss', // `!important` used
        ],
      },
      options: {
        formatted: 'stylish',
      },
    },
  };

  gulp.task('css', ['css:lint'], () => {
    gulp.src(SCSS)
      .pipe(sourcemaps.init())
      .pipe(sass(CONFIG.SASS).on('error', sass.logError))
      .pipe(postcss(CONFIG.POSTCSS))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
  });

  gulp.task('css:lint', () => {
    gulp.src(SCSS)
      .pipe(sassLint(CONFIG.SASSLINT))
      .pipe(sassLint.format());
  });

  gulp.task('css:build', ['css']);
};
