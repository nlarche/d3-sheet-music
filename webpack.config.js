// webpack.config.js
module.exports = {
	entry: './src/index.js',
	output: {
		path: 'dist/',
		filename: 'bundle.js',
		library: ["sheetMusic", "[name]"],
		libraryTarget: "umd"
	},
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components'],
	},
};