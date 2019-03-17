const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  output: {filename: '[name].bundle.js', path: path.resolve(__dirname, './dist')},

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, '../../node_modules'),
        include: path.resolve(__dirname, './src'),
        options: {presets: ['@babel/preset-env']}
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader', options: {sourceMap: true}},
          {loader: 'css-loader'}
        ]
      }
    ]
  },

  plugins: [new UglifyJSPlugin()]
  // 这款插件用于压缩 JS 代码，减少资源体积大小
};
