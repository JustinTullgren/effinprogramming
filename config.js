module.exports = {
	paths: {
		lib: './app/lib/**',
		js: ['./app/js', './app/main.js', '!node_modules'],
		html: ['./app/**/*.html']
	},
	dest: {
		root: './dist',
		lib: './dist/lib',
		files: 'dist/**/*',
		bundle: 'bundle.js'
	},
	lintrc: './.eslintrc.json',
	bundleOptions: {
		entries: ['./app/main.js'],
		transform: [
			['babelify', {
				ignore: ['./app/lib/**'],
				presets: ['es2015']
			}]
		],
		ignore: './app/lib/**',
		debug: true
	}
};
