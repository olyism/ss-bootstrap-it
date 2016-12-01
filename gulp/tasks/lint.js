/**
 * Tasks:
 * - gulp eslint  runs eslint for source scripts based on airbnb's standards
 */

import gulp from 'gulp';
import eslint from 'gulp-eslint';

const SRC = require('./gulp/config').paths.src.js;
const CONFIG = require('../config').eslint;

gulp.task('eslint', () => {
  gulp.src(SRC)
    .pipe(eslint(CONFIG))
    .pipe(eslint.format());
});
