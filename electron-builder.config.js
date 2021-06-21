/**
 * electron-builder的配置文件,使用时通过 --config 指定
 * 如 electron-builder --config ./electron-builder.config.js
 * 各配置项参考官方文档： https://www.electron.build/configuration/configuration
 */

module.exports = {
  productName: 'Dooring', //项目名
  appId: 'com.electron.xu',
  copyright: 'Copyright © Dooring', //版权
  extraMetadata: {   // 注入打包后package.json的属性
    main: './index.js', // 修改包入口
  },
  directories: {
    output: 'release',  // 输出文件夹
  },
  files: ['index.js', 'appdoc/', 'main/', 'dist/', 'node_modules/', 'package.json'], // 需要打包的文件
  // mac打包配置
  mac: {
    // 包类型，参见 https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8
    category: 'public.app-category.developer-tools',
    target: 'default', // 目标包类型，
  },
  dmg: {
    background: 'build/appdmg.png', // dmg安装窗口背景图
    icon: 'build/icon.icns', // 客户端图标
    iconSize: 100, // 安装图标大小
    // 安装窗口中包含的项目和配置
    contents: [
      { x: 380, y: 280, type: 'link', path: '/Applications' },
      { x: 110, y: 280, type: 'file' },
    ],
    window: { width: 500, height: 500 }, // 安装窗口大小
  },
  linux: {
    target: ['AppImage', 'deb'],
    icon: 'build/icon.png',
  },
  win: {
    target: ['nsis', 'portable', 'squirrel'],
    icon: 'build/icon.ico', // 客户端图标
  },
  nsis: {
    oneClick: false, // 是否一键安装
    allowElevation: true,// 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
    allowToChangeInstallationDirectory: true, // 允许修改安装目录
    // installerIcon: "./build/icon.ico",// 安装图标
    // uninstallerIcon: "./build/icons/bbb.ico",//卸载图标
    // installerHeaderIcon: "./build/icon.ico", // 安装时头部图标
    createDesktopShortcut: true, // 创建桌面图标
    createStartMenuShortcut: true,// 创建开始菜单图标
    shortcutName: 'Dooring', // 图标名称
  },
  // asar: {
  //   smartUnpack: true,  // asar打包, 智能提取第三方模块
  // },
  asar: false,
  publish: [
    {
      provider: 'generic',
      url: 'http://localhost/release/',//更新服务器地址,请按实际部署修改
    },
  ],
};
