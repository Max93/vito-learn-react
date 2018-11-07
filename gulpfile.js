var gulp = require('gulp');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

// Minify JavaScript
gulp.task('js:minify', function () {
  return gulp.src([
    './js/*.js',
    '!./js/*.min.js'
  ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', ['js:minify']);

// Configure the browserSync task
gulp.task('browserSync', function () {
  browserSync.init({
    open: false,
    server: {
      baseDir: "./"
    },
    host: '0.0.0.0',
    port: 80
  });
});

// Dev task
gulp.task('dev', ['js', 'browserSync'], function () {
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./*.html', browserSync.reload);
});
