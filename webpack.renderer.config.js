const rules = require('./webpack.rules');
const path = require('path');
const webpack = require('webpack');

rules.push({
  test: /\.css$/,
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
      compact: true 
    },
  },
});

rules.push({
  test: /\.(png|jpe?g|gif|webp)$/i,
  type: 'asset/resource',
});

rules.push({
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack']
});

module.exports = (_, argv) => {
  /** @type {import('webpack').Configuration} */
  const config = {
    mode: argv.mode === 'production' ? 'production' : 'development',
    devtool: 'source-map',
    module: {
      rules,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@lib': path.resolve(__dirname, 'libs'),
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
      }),
    ]
  }
  return config;
};
