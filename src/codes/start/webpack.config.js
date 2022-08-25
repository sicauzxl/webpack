/*
 * @Author: sicauzxl@qq.com
 * @Date: 2022-08-25 15:59:03
 * @LastEditors: sicauzxl@qq.com
 * @LastEditTime: 2022-08-25 15:59:10
 * @Description: file content
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};