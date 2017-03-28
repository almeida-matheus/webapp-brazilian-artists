import webpack from 'webpack';
import path from 'path';
const built = path.resolve('./built/');
const client = path.resolve('./app/');

export default {
	entry: client + '/index.jsx',
	output: {
		path: built ,
		filename: 'bundle.min.js'
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	}
};