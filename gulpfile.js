const config = require('./config');
const gulp = require('gulp-help')(require('gulp'));
const plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'watch*', 'browser*'],
	scope: ['devDependencies', 'dependencies']
});
const runSequence = require('run-sequence');
const clean = require('./gulp/clean')(config);
const sync = require('./gulp/sync')(gulp, plugins, config);
const lint = require('./gulp/lint')(gulp, plugins, config);
const lib = require('./gulp/lib')(gulp, plugins, config);
const bundle = require('./gulp/bundle')(gulp, plugins, config);
const copy = require('./gulp/copy')(gulp, plugins, config);

gulp.task('clean', clean);
gulp.task('lib', lib);
gulp.task('sync', sync);
gulp.task('lint', lint);
gulp.task('bundle', bundle);
gulp.task('js-watch', ['bundle'], sync.reload);
gulp.task('watch', () => {
	gulp.watch([config.paths.js, config.paths.html], ['js-watch', 'copy']);
});
gulp.task('copy', copy);
gulp.task('default', callback => runSequence('clean', 'lint', 'copy', 'sync', 'bundle', 'watch', callback));
