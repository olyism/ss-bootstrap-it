import gulp from 'gulp';

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['css:build', 'js:build']);
require('./gulp/tasks/css')(gulp);
require('./gulp/tasks/js')(gulp);
require('./gulp/tasks/watch')(gulp);
