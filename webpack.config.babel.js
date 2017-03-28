import webpack from 'webpack';
import path from 'path';
import poststylus from 'poststylus';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const built = path.resolve('./built/');
const client = path.resolve('./app/');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: client + '/index.pug',
	filename: 'index.html',
	filetype: 'html'
});

export default {
	entry: client + '/containers/app.container.jsx',
	output: {
		path: built,
		filename: 'assets/javascript/bundle.min.js'
	},
	module: {
		rules: [
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
				include: path.join(__dirname, '/config/manifest.json'),
				test: /(\.json)$/,
                use: {
					loader: 'file-loader',
					options: {
						name: 'config/[name].[ext]'
					}
                }
            },
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
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
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				stylus: {
					use: [
						poststylus([
							'autoprefixer',
							'rucksack-css'
						])
					]
				}
			}
		}),
		new CopyWebpackPlugin([ { from: './app/config/manifest.json', to: './config' } ]),
		HTMLWebpackPluginConfig
	]
};