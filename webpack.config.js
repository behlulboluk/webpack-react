const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query:{
          presets:['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader','css-loader'],
      },
    ],
  },
};
