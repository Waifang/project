const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nib = require('nib');


module.exports = {
    entry: './src/js/index.js',
    output: {
      filename: 'js/bundle.js',
      path: path.join(__dirname,'dist/')
    },
    mode: 'production',
    module:{
        rules:[
            {  
                test: /\.(htm|html)$/,  
                use: [  
                   'raw-loader'  
                ]  
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, '../node_modules')
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.styl$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2 // css-loader options
                    } 
                },{
                    loader: 'postcss-loader', // 自动加前缀
                    options: {
                        config: {
                            path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                        }
                    } 
                },{
                    loader: 'stylus-loader'
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/index.css'),
        new HtmlWebpackPlugin({  // Also generate a test.html
	        template:'./src/views/index.html',
			filename:'views/index.html',
			hash:true,
            inject: true
		})
        
    ],
    devServer: {
	    contentBase:"./dist/views",
		port:9999,
		inline:true,
		hot: true,
        open: true
	}
};

