/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
// const glob = require('glob');
const webpack = require('webpack'); // to access built-in plugins
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
// const fs = require('fs')
const loaders = require('./loaders');
const plugins = require('./plugins');
const getEntries = require('./utils/getEntries');
const htmlPlugin = require('./htmlPlugin');

module.exports = {
  entry: { ...getEntries('./components/pages/*/*.js') },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader,
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../dist/assets'),
    filename: 'scripts/[name].script.js',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.ESLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.StyleLintPlugin,
    new WebpackManifestPlugin({ publicPath: '' }),
    ...htmlPlugin(),
  ],
};
