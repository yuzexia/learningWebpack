/*
* @Author: EDZ
* @Date:   2021-07-28 15:29:56
* @Last Modified by:   yuze.xia
* @Last Modified time: 2021-07-28 16:20:37
*/

const path = require('path');

module.exports = {
	entry: './src/index.js',   //指定webpack打包的入口文件路径
	// output属性为设置输出文件的位置，必须是一个对象
	output: {
		filename: 'bundle.js',
		path    : path.join(__dirname, 'output')
	}
}