const rules = require('./webpack.rules');
const path = require('path');

rules.push({
  test: /\.css$/,
  include: path.resolve(__dirname, 'src'),
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader'
  ],
});

rules.push({
  test: /\.jsx?$/,
  use: {
    loader: 'babel-loader',
    options: {
      exclude: /node_modules/,
      presets: ['@babel/preset-react'],
      compact: false
    }
  }
});

module.exports = {
  devtool: 'source-map',
  module: {
    rules,
  },
};
