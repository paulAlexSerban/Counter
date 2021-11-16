/* eslint-disable no-shadow */
/* eslint-disable-next-line import/no-extraneous-dependencies */
const glob = require('glob');

module.exports = (path) => glob.sync(path).reduce((acc, item) => {
  const path = item.split('/');
  path.pop();
  const name = path.pop();
  acc[name] = item;
  return acc;
}, {});
