/**
 * Tasks:
 * - gulp polyfills         builds all polyfill scripts (including modernizr)
 * - gulp modernizr         builds modernizr-custom.js
 *
 * Polyfill scripts are conservatively minified using JSMin,
 * and it doesn't get bundled by browserify.
 */

import gulp from 'gulp';

import concat from 'gulp-concat';
import jsmin from 'gulp-jsmin';
import modernizr from 'gulp-modernizr';
import rename from 'gulp-rename';

const SRC = require('../config').paths.src;
const DIST = require('../config').paths.dist;

const OPTS = require('../config').config.modernizr;

gulp.task('polyfills', ['modernizr'], () => {
  gulp.src(SRC.polyfills)
    .pipe(concat('polyfills.js'))
    .pipe(gulp.dest(DIST))
    .pipe(jsmin())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest(DIST));
});

gulp.task('modernizr', () => {
  gulp.src([SRC.js, `${DIST}/css/**/*.css`])
    .pipe(modernizr('modernizr-custom.js', OPTS))
    .pipe(gulp.dest(DIST))
    .pipe(jsmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(DIST));
});
