import { dialog, ipcRenderer } from 'electron';
import { mainWindow } from '../main';
function openProject() {
  const path = dialog.showOpenDialogSync({ properties: ['openDirectory'] });
  console.log(path);
  mainWindow.webContents.send('project-path', path);
}

export { openProject };
