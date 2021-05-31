import { directoryTree } from '../../src/electron/files/get-files';
console.log(
  directoryTree(
    'C:\\Users\\septlog\\Downloads\\work\\weixuyang\\ModelCoderGUI\\src',
    { extensions: /\.(c)$/ },
  ),
);
