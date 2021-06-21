const { dialog, app, autoUpdater } = require('electron');
const os = require('os');
const log = require('electron-log');
const CONFIG = require('../config/config');

// 此处为部署的 electron-release-server 服务提供
const updateServerUrl = `${CONFIG.autoUpdateUrl}/${os.platform()}_${os.arch()}/${app.getVersion()}/stable`;
// const updateServerUrl = 'http://localhost:5014/update/flavor/Electron-umi/darwin_64/0.0.9/stable'

class AppAutoUpdater {
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
    log.transports.file.level = 'debug';

    autoUpdater.setFeedURL(updateServerUrl);

    autoUpdater.on('checking-for-update', () => {
      log.info('Checking for update...');
      mainWindow.webContents.send('appUpdater', 'checking-for-update');
    });

    autoUpdater.on('update-available', async (ev, info) => {
      log.info('Update available.');
      mainWindow.webContents.send('appUpdater', 'update-available', info);
    });

    autoUpdater.on('update-not-available', (ev, info) => {
      log.info('Update not available.');
      mainWindow.webContents.send('appUpdater', 'update-not-available', info);
    });

    autoUpdater.on('error', (ev, err) => {
      log.error(err);
      mainWindow.webContents.send('appUpdater', 'error', err);
    });

    autoUpdater.on('download-progress', (progress) => {
      mainWindow.webContents.send('appUpdater', 'download-progress', progress);
    });

    autoUpdater.on('update-downloaded', async (ev, info) => {
      mainWindow.webContents.send('appUpdater', 'update-downloaded', info);
      const { response } = await dialog.showMessageBox({
        type: 'info',
        title: '更新下载完成',
        message: '更新已下载完成，立即退出安装吗？',
        buttons: ['现在安装', '以后安装'],
        cancelId: 1,
      });
      if (response === 0) {
        autoUpdater.quitAndInstall();
      } else {
        mainWindow.webContents.send('appUpdater', 'cancel');
      }

    });


  }

  checkForUpdates() {
    log.info('call check update');
    return autoUpdater.checkForUpdates();
  };

}

module.exports = AppAutoUpdater;
