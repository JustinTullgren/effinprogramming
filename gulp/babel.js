const babel = require('gulp-babel');

module.exports = (gulp, config) =>
	() =>
		gulp.src(config.js)
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(gulp.dest(config.dist));
