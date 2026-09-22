const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = (_, argv) => {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: 'source-map',
    module: {
      rules,
    },
  }
  return config;
};
