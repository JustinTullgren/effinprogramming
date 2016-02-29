'use strict';
const browserSync = require('browser-sync').create();

module.exports = (gulp, plugins, config) => {
	let f = () => {
		browserSync.init({
			server: {
				baseDir: config.dest.root,
				reloadOnRestart: true
			}
		});
	};

	f.reload = browserSync.reload;
	return f;
}
