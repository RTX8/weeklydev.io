var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var sassPaths = [
  'public/components/foundation-sites/scss',
  'public/components/motion-ui/src',
  'public/components/components-font-awesome/scss'
];

gulp.task('sass', function () {
  return gulp.src('public/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
      // outputStyle: 'compressed'
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['public/scss/**/*.scss'], ['sass']);
});
