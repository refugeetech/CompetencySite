const gulp = require('gulp')
var mocha = require('gulp-mocha')

require('./src/compiler.js')
require('babel-core/register')

gulp.task('mocha', () => {
  return gulp
    .src([
      './src/specHelper.js',
      './src/components/**/*.spec.js'
    ], { read: false })
    .pipe(mocha())
})

gulp.task('watch', () => {
  gulp.watch('./src/components/**/*.js', ['mocha'])
})

gulp.task('default', [
  'mocha',
  'watch'
])
