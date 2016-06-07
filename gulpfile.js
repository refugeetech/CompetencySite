const gulp = require('gulp')
const mocha = require('gulp-mocha')
const localeapp = require('gulp-localeapp')

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
  'localeapp',
  'mocha',
  'watch'
])

gulp.task('localeapp', function (done) {
  return localeapp({apiKey: 'gslU5kQVPHc77t1Vy6e3ibKQhO9F7Q096pczZyGfIz80uNv9dd'})
    .pipe(gulp.dest('src/assets/json/'))
})
