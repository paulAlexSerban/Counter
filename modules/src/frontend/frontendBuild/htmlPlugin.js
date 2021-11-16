/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
const _HtmlWebpackPlugin = require('html-webpack-plugin');
const getEntries = require('./utils/getEntries');

const entries = getEntries('./components/pages/*/*.html');

module.exports = () => {
  const htmlPages = [];
  Object.keys(entries).forEach((entry) => {
    htmlPages.push(new _HtmlWebpackPlugin({
      template: `./components/pages/${entry}/${entry}.html`,
      filename: `${entry}.html`,
      inject: false,
    }));
  });
  return htmlPages;
};
