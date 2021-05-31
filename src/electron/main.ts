const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
import { menus } from './menus/menus';
let mainWindow;
Menu.setApplicationMenu(menus);
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true,
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(`file://${process.cwd()}/dist/index.html`);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  mainWindow.openDevTools();
});
export { mainWindow };
