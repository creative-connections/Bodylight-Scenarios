import gulp from 'gulp';
const {protractor, webdriver_update }  = require('gulp-protractor');

gulp.task('webdriver_update', webdriver_update);

gulp.task('protractor', (cb) => {
  gulp.src('test/e2e/**/*.e2e.js')
    .pipe(protractor({configFile: 'test/protractor.conf.js'}))
    .on('error', cb)
    .on('end', cb);
});

// Setting up the test task
export default gulp.series(
  'webdriver_update',
  'protractor'
);
