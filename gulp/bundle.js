const browserify = require('browserify');
const watchify = require('watchify');
const merge = require('ramda').merge;
const error = require('console').error;
const source = require('vinyl-source-stream');

module.exports = (gulp, plugins, config) => {
	const watcher = watchify(browserify(merge(watchify.args, config.bundleOptions)));
	const bundle = () => watcher.bundle()
			.on('error', err => {
				error(err);
				plugins.browserSync.notify(err.message, 2000);
			})
			.pipe(plugins.plumber())
			.pipe(source(config.dest.bundle))
			.pipe(gulp.dest(config.dest.root));

	watcher.on('update', bundle);

	return bundle;
}
