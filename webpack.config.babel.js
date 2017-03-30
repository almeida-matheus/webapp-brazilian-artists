import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const built = path.resolve('./built/');
const client = path.resolve('./app/');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${client}/index.pug`,
	filename: 'index.html',
	filetype: 'html'
});

export default {
	entry: `${client}/index.jsx`,
	devtool: 'eval-source-map',
	output: {
		path: built,
		filename: 'assets/javascript/bundle.min.js'
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				enforce: 'pre',
				use: [
					{
						loader: 'eslint-loader'
					}
				]
			},
			{
				test: /(\.jsx|\.js)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'es2015',
								{
									modules: false
								}
							]
						]
					}
				}
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}'
					},
					{
						loader: 'stylus-loader'
					}
				]
			},
			{
				test: /(\.pug)$/,
				loaders: [
					'html-loader',
					'pug-html-loader?exports=false'
				]
			}
		]
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.html',
			'.pug',
			'.css',
			'.styl'
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: './app/config',
				to: './config'
			},
			{
				from: './app/assets/images',
				to: './assets/images'
			},
			{
				from: './app/service-worker.js',
				to: './'
			}
		]),
		HTMLWebpackPluginConfig
	]
};