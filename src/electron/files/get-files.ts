const dirTree = require('directory-tree');
function getFileTree(path): Object {
  const filteredTree = dirTree(path, {
    extensions: /\.(c)$/,
  });
  return filteredTree;
}

module.exports = { getFileTree };
