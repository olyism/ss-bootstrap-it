module.exports = (gulp) => {

  const browserSync = require('browser-sync').create();

  const CONFIG = {
    proxy: 'ss3.vagrant',
  };

  const JS_SRC = ['javascript/**/*.js', '!javascript/**/*.min.js', '!javascript/**/main.js'];

  gulp.task('browsersync', ['css:build', 'js:build'], (done) => {
    browserSync.init(CONFIG);
    gulp.watch('scss/**/*.scss', ['css']);
    gulp.watch(JS_SRC, ['js']);
    browserSync.reload();
    done();
  });

  gulp.task('watch', ['css:build', 'js:build'], (done) => {
    gulp.watch('scss/**/*.scss', ['css']);
    gulp.watch(JS_SRC, ['js']);
    browserSync.reload();
    done();
  });

  gulp.task('watch:css', ['css:build'], () => {
    gulp.watch('scss/**/*.scss', ['css']);
  });

  gulp.task('watch:js', ['js:build'], () => {
    gulp.watch(JS_SRC, ['js']);
  });

};
