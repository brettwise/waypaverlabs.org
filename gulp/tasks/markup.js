var gulp = require('gulp');
var markup = require('../config').markup;
var browserSync  = require('browser-sync');

gulp.task('markup', function() {
  return gulp.src(markup.src)
    .pipe(gulp.dest(markup.dest))
    .pipe(browserSync.reload({stream:true}));
});
