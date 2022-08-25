/*
 * @Author: sicauzxl@qq.com
 * @Date: 2022-08-25 15:59:03
 * @LastEditors: sicauzxl@qq.com
 * @LastEditTime: 2022-08-25 16:24:52
 * @Description: file content
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};