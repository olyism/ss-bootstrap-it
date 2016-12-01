/**
 * Tasks:
 * - gulp eslint  runs eslint for source scripts based on airbnb's standards
 */

import eslint from 'gulp-eslint';

const SRC = require('./gulp/config').paths.src.js;
const CONFIG = require('./gulp/config').eslint;

module.exports = (gulp) => {
  gulp.task('eslint', () => {
    gulp.src(SRC)
      .pipe(eslint(CONFIG))
      .pipe(eslint.format());
  });
};
