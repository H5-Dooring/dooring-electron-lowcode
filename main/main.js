const path = require('path');
const { app, BrowserWindow } = require('electron');
const GLOBAL_CONFIG = require('./config/config.global');
const setApplicationMenu = require('./utils/menu');
const { isDevEnv } = require('./utils/util');
const AppUpdater = require('./utils/appUpdater');
const AppAutoUpdater = require('./utils/appAutoUpdater');
const setIpc = require('./ipc/index');

/* global 配置 */
global.GLOBAL_CONFIG = GLOBAL_CONFIG;

let mainWindow = null;

const MAIN_WINDOW_CONFIG = {
  height: 860,
  width: 1350,
  webPreferences: {
    enableRemoteModule: true,
    nodeIntegration: true,
    contextIsolation: false,
  },
};

function createWindow() {
  mainWindow = new BrowserWindow(MAIN_WINDOW_CONFIG);

  if (isDevEnv()) {
    // 开发环境
    // const installDevtoolExt = require('./utils/installDevtoolExt');
    // 安装调试工具拓展
    // installDevtoolExt();

    mainWindow.loadURL('http://localhost:8000');
    mainWindow.webContents.openDevTools();
  } else {
    // mainWindow.webContents.openDevTools();
    app.server = require('./server.js');  
    mainWindow.loadURL('http://localhost:3000');
    win_listener(mainWindow)
    // mainWindow.loadURL(
    //   url.format({
    //     pathname: path.join(__dirname, '../dist/renderer/index.html'),
    //     protocol: 'file:',
    //     slashes: true,
    //   }),
    // );

  }

  function win_listener(win) {
    win.webContents.on('new-window', (e, url, frameName, disposition, options) => {
      // console.log(e, url, frameName, disposition, options)
      const isPreview = url.indexOf('preview') > -1;
      const childWin = new BrowserWindow({
        height: isPreview ? 667 : 720,
        width: isPreview ? 375 : 1280,
        webPreferences: {
          nodeIntegration: true
        },
      });
      win_listener(childWin);
      childWin.loadURL(url);
      e.preventDefault();
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
  setApplicationMenu(mainWindow);
  // 更新逻辑，两个方案选一
  // 1.基于electron-updater 和静态文件服务
  // const appUpdater = new AppUpdater(mainWindow);

  // 2.基于自带的 autoUpdate 和包版本管理服务
  // const appUpdater = new AppAutoUpdater(mainWindow);

  setIpc(mainWindow);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
