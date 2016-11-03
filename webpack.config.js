var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');   /*  html-webpack-plugin插件，重中之重，webpack中生成HTML的插件 */

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
		entry: {
			index:"./app/main.js"
		},
		output: {
	    	path: "build",  /*发布的目录*/
	    	publicPath:'',
	    	filename: '[name].js'	/*  输出文件  */
		},
	    module: { // 加载器配置
	    	loaders: [
	    		//test 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx 
	    		//加载模块 "babel" 是 "babel-loader" 的缩写
	    		{test: /\.js$/,loaders: ['babel'],exclude:/node_modules/},
	    		{test: /\.jsx?$/,loader: 'babel',exclude:/node_modules/,query:{presets:['es2015','react']}}, 
	    		{test: /\.css$/,loader: 'style!css'},
	    		{test: /\.scss$/,loader: 'style!css!sass'},
	    		{test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
	    		 /*配置信息的参数“?limit=8192”表示将所有小于8kb的图片都转为base64形式（其实应该说超过8kb的才
					使用 url-loader 来映射到文件，否则转为data url形式）。 */
					/*拿最后一个 url-loader 来说，它会将样式中引用到的图片转为模块来处理，使用该加载器需要先进行安
					* npm install url-loader -save-dev */
	      	]
	  	},
	  	plugins: [
		  	/*new ExtractTextPlugin("[name].css"),*/
		  	new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML*/
	            title: 'yanglifu',	// title
    			template: path.resolve(__dirname, 'templates/index.html'),//模板文件路径
	            filename: './list.html', //生成的html存放路径，相对于path(即：发布目录)
	            inject: 'body', //js插入的位置，true/'head'/'body'/false
	            hash: true, //为静态资源生成hash值
	            //chunks: ['common','index'],//需要引入的chunk，不配置就会引入所有页面的资源
	            minify: { //压缩HTML文件    
	                removeComments: false, //移除HTML中的注释
	                collapseWhitespace: false //删除空白符与换行符
	            }
        	}),
        	//React压缩 官方提供的代码是已经合并的, 这个是 Webpack 不推荐的用法, 在合并话的代码上进行定制有点麻烦, Webpack 提供了设置环境变量来优化代码的方案:
			new webpack.DefinePlugin({
			  "process.env": { 
			     NODE_ENV: JSON.stringify("production") 
			   }
			}),

        	 new webpack.optimize.DedupePlugin(),	// 检测相同的文件内容 将这些冗余 消除掉
        	 new webpack.optimize.UglifyJsPlugin({ minimize: true }),  // 压缩 输出的 js 文件
        	 new webpack.optimize.OccurenceOrderPlugin(),	// 按照引用频度来排序模块的id
        	 new webpack.NoErrorsPlugin()	// 保证编译过程不会出错

	  	],
		/* 使用webpack-dev-server 提高开发效率*/
		devServer: {
			contentBase: './',
			host: 'localhost',
			port: 8889, //默认8080
			inline: true, //可以监控js变化
			hot: true, //热启动
		}
};
module.exports = config;
