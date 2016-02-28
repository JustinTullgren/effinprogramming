const lint = require('gulp-eslint');

module.exports = (gulp, config) =>
	() =>
		gulp.src(config.js)
			.pipe(lint(config.lintrc))
			.pipe(lint.format())
			.pipe(lint.failAfterError());
