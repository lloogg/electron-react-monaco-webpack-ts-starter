const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
let mainWindow;
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      //   devTools: false
    },
  });
  console.log(process.cwd());
  mainWindow.loadURL(`file://${process.cwd()}/dist/index.html`);
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
});
