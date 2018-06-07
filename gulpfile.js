var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    browserSync  = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'portfolio'
    },
    notify: false,
    open: false
  });
});

//Default Gulp task

if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
  gulp.task('default', ['browser-sync']);
} else {
  gulp.task('default', function() {
    console.log('without browser-sync');
  });
}