const config = require('./config');
const gulp = require('gulp-help')(require('gulp'));
const sync = require('./gulp/sync')(gulp, config);
const lint = require('./gulp/lint')(gulp, config);
const babel = require('./gulp/babel')(gulp, config);

gulp.task('sync', sync);
gulp.task('lint', lint);
gulp.task('watch', () => gulp.watch(config.js, ['lint', 'babel']));
gulp.task('babel', babel);
gulp.task('default', ['lint', 'sync', 'watch']);
