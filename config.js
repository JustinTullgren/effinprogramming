module.exports = {
	baseDir: './app',
	syncFiles: ['**/*.html', '**/js/dist/**/*.js'],
	js: ['./app/js/src/**/*.js', '!node_modules/'],
	lintrc: './.eslintrc.json',
	dist: './app/js/dist'
};
