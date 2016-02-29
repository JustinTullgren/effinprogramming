module.exports = (gulp, plugins, config) =>
	() =>
		gulp.src(config.paths.js)
			.pipe(plugins.eslint(config.lintrc))
			.pipe(plugins.eslint.format())
			.pipe(plugins.eslint.failAfterError());
