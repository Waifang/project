const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
	entry:'./src/js/app.js',
	output:{
		path:path.join(__dirname,'dist/'),
		filename:'js/bundle.js'
	},
	module:{
		rules:[
		   //配置各种loader
			//{ test:/\.css$/,use:"css-loader"}
			//{ test:/\.css$/,use:['style-loader','css-loader']},
			{
			 test:/\.css$/,
			 use:'css-loader',
		     use: ExtractTextPlugin.extract({
                   use: 'css-loader'
             })
			},
			{ test:/\.(scss|sass)/,
			  use:["css-loader","sass-loader"],
			  use:ExtractTextPlugin.extract({
                   use: ['css-loader','sass-loader']
             })
			}
		
		]
	},	
	plugins:[   
		
		//new webpack.optimize.UglifyJsPlugin(),
		new webpack.BannerPlugin('webpack2 演示'),   //注释
	/*	new webpack.ProvidePlugin({
		  $: 'jquery'
		 // jQuery: 'jquery'
		}),*/
		new ExtractTextPlugin('css/style.css'),
		new HtmlWebpackPlugin({
			template:'./src/views/index.html',
			filename:'views/index.html',
			hash:true
		})
	],
	devServer:{
		contentBase:"./dist/views",
		port:9999,
		inline:true
	}


}