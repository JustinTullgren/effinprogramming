module.exports = (gulp, plugins, config) =>
	() =>
		gulp.src(config.paths.lib)
			.pipe(plugins.plumber())
			.pipe(gulp.dest(config.dest.lib));
