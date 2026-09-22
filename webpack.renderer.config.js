const { webpack } = require('webpack');
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
    },
  },
});

rules.push({
  test: /\.(png|jpe?g|gif|webp)$/i,
  type: 'asset/resource',
  // generator: {filename: 'static/images/[hash][ext][query]'},
});

rules.push({
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack']
})

module.exports = (env, argv) => {
  /** @type {import('webpack').Configuration} */
  const config = {
    mode: argv.mode === 'production' ? 'production' : 'development',
    watchOptions: {
      ignored: [
        '**/node_modules/**',
        '**/.webpack/**',
        '**/.git/**',
        '**/out/**',
      ]
    },
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@lib': path.resolve(__dirname, 'libs'),
      }
    },
    module: {
      rules,
    },
    node: {
      __dirname: false
    }
  }
  return config;
};
