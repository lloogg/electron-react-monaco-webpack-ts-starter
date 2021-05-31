import { ipcRenderer, contextBridge, shell, remote } from 'electron';
import { directoryTree } from './files/get-files';
contextBridge.exposeInMainWorld('electron', {
  directoryTree,
  getProjectPath: function (func) {
    ipcRenderer.on('project-path', (e, data) => {
      func(data);
    });
  },
});
