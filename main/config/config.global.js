const path = require('path');
const os = require('os');
const {app} = require('electron');
const plat = os.type().toLocaleLowerCase();
/**
 * 暴露到global的一些配置
 * */
module.exports = {
  PLAT: plat,
  APP_PATH: app.getAppPath(),
};
