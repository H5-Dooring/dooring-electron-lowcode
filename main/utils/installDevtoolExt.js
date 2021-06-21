/**
 * 调试工具拓展安装
 * 文档参考：https://github.com/MarshallOfSound/electron-devtools-installer
 * */
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

module.exports = function() {
  require('devtron').install()

  installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
};
