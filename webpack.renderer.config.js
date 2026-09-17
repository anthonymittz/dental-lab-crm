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

module.exports = (env, argv) => {
  const isProduction  = argv.mode === 'production';
  return {
    mode: isProduction ? 'production' : 'development',
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    module: {
      rules,
    },
  }
};
