/**
 * Tasks:
 * - gulp eslint  runs eslint for source scripts based on airbnb's standards
 */

import gulp from 'gulp';
import eslint from 'gulp-eslint';

const SRC = require('../config').paths.src.js;
const OPTS = require('../config').config.eslint;

gulp.task('eslint', () => {
  gulp.src(SRC)
    .pipe(eslint(OPTS))
    .pipe(eslint.format());
});
