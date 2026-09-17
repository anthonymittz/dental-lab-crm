const path = require('path');

module.exports = {
  entry: './src/main.js',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@lib': path.resolve(__dirname, 'libs'),
    }
  },
  module: {
    rules: require('./webpack.rules'),
  },
  externals: {
    'better-sqlite3': 'commonjs better-sqlite3',
    'bcrypt': 'commonjs bcrypt'
  }
};
