import { app, Menu } from 'electron';
import { openProject } from '../files/open-project';
import { mainWindow } from '../main';
const template = [
  {
    label: '文件',
    submenu: [
      {
        label: '打开文件',
        click: () => {
          const contents = mainWindow.webContents;
          console.log(contents);
        },
      },
      {
        label: '打开工程',
        click: openProject,
      },
    ],
  },
  {
    label: '编辑',
    submenu: [],
  },
];
const menus = Menu.buildFromTemplate(template);
export { menus };
