const gulp = require('gulp')
const mocha = require('gulp-mocha')

require('./src/compiler.js')
require('babel-core/register')

gulp.task('mocha', () => {
  return gulp
    .src([
      './src/specHelper.js',
      './src/**/*.spec.js'
    ], { read: false })
    .pipe(mocha())
})

gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', ['mocha'])
})

gulp.task('default', [
  'mocha',
  'watch'
])
