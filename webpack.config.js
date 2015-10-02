// webpack.config.js
module.exports = {
	entry: './src/index.js',
	output: {
		path: 'dist/',
		filename: 'bundle.js',
	},
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components'],
	},
};