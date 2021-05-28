const { getFileTree } = require('../../src/electron/files/get-files');
console.log(
  getFileTree(
    'C:\\Users\\septlog\\Downloads\\work\\weixuyang\\ModelCoderGUI\\src',
  ),
);
