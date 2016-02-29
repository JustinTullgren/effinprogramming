module.exports = (gulp, plugins, config) =>
	() =>
		gulp.src(config.paths.html)
			.pipe(plugins.plumber())
			.pipe(gulp.dest(config.dest.root));
