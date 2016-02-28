const browserSync = require('browser-sync').create();

module.exports = (gulp, config) =>
	() => {
		browserSync.init({
			server: {
				baseDir: config.dest,
				reloadOnRestart: true
			}
		});
		gulp.watch(config.syncFiles).on('change', browserSync.reload);
	};
