/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs');
const distSourceFolder = path.join(__dirname, '../../dist');
const buildDestinationFolder = path.join(__dirname, '../../../../build');

const watch = require('node-watch');

function concatPath(pathElements) {
  const pathLength = pathElements.length;
  let pathTo = '';

  for (let i = 0; i < pathLength; i++) {
    pathTo += `/${pathElements[i]}`;
  }

  return pathTo;
}

watch(distSourceFolder, { recursive: true }, (evt, srcPath) => {
  const sourcePathParts = srcPath.split('/').filter((item) => item.length > 0);
  const pathParts = [];

  for (let i = sourcePathParts.indexOf('assets') + 1; i < sourcePathParts.length; i++) {
    pathParts.push(sourcePathParts[i]);
  }
  const destinationFile = `${buildDestinationFolder}${concatPath(pathParts)}`;
  pathParts.pop();
  const destinationDir = `${buildDestinationFolder}${concatPath(pathParts)}`;

  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  fs.copyFile(srcPath, destinationFile, (err) => {
    if (err) throw err;
  });

  console.log('\x1b[34m', 'SYNC', '\x1b[0m', `of ...${srcPath.substr(srcPath.length - 30)} to  ...${destinationFile.substr(destinationFile.length - 30)}`, '\x1b[32m', 'COMPLETED');
});
