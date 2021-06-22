# dooring-electron-lowcode
基于electron的lowcode编辑器桌面端

> 让页面制作像搭积木一样简单!

<p align="center">
    <img src="http://cdn.dooring.cn/dr/logo.ff7fc6bb.png" width="260" alt="H5编辑器,H5制作神器,H5 editor,lowcode">
</p>
<h1 align="center">Welcome to dooring-electron-lowcode 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.2-blue.svg?cacheSeconds=2592000" />
  <a href="https://juejin.im/post/6864410873709592584/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="license:GPL3.0" src="https://img.shields.io/badge/license-GPL3.0-yellow.svg" />
  </a>
</p>

> dooring-electron-lowcode是一款功能强大，专业可靠的可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。技术栈以react和typescript为主， 后台采用nodejs开发, electron作为桌面端基础方案。

> dooring-electron-lowcode is a powerful, open source, free visual page configuration solution dedicated to providing a simple, convenient, professional and reliable, unlimited set of H5 landing page best practices. The technology stack is mainly react, developed in the background using nodejs.

### 🏠 [Homepage](http://h5.dooring.cn)

### ✨ [Demo](http://h5.dooring.cn/h5_plus)

### 📦 doc(文档) [H5-Dooring Document](http://h5.dooring.cn/doc)

### [视频教程 | Video tutorial](https://www.zhihu.com/zvideo/1326300284608417792)

![](http://cdn.dooring.cn/dr/2.png)

相关产品: 
- [V6.Dooring | 大屏可视化编辑器](https://github.com/MrXujiang/v6.dooring.public)
- [H5-Dooring | H5可视化编辑器](https://github.com/MrXujiang/h5-Dooring)

## Author

👤 **徐小夕**

* Website: http://h5.dooring.cn
* Github: [@MrXujiang](https://github.com/MrXujiang)

## 声明

未获得授权的情况下，禁止对该仓库代码进行反编译、分发等行为，否则将承担相应的法律后果。

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/MrXujiang/h5-Dooring/issues).
欢迎提供问题和功能需求, 如果大家有好的点子和优化建议, 也欢迎提pr参与我们的共建.

## Show your support

Give a ⭐️ if this project helped you!
如果觉得项目还不错, 就点个star吧~

## Install(安装)
1. 下载代码 | Download the code
```sh
git clone git@github.com:MrXujiang/dooring-electron-lowcode.git
```

2. 安装依赖包 | Install the dependency package
```sh
yarn install
or
cnpm install
```

3. 构建前端包
```sh
cd ./renderer
# 安装前端包
yarn
# 构建前端包
yarn build
```

## Usage

本地启动应用 | Launch the app locally
```sh
yarn debug:main
```

### 项目打包

##### 构建测试包
```
npm run pack   // 仅输出包,方便测试
```

##### 构建安装包

1. 执行前端资源打包

```
npm run build  // react资源打包
```

2. 运行electron构建命令,输出安装包

```
npm run dist-mac // mac包
npm run dist-win // windows包
npm run dist-linux // linux包
npm run dist-all   // 所有平台包
```

各配置规则请参考文件中注释和官方文档：

[electron-builder参数参考](https://www.electron.build/configuration/configuration)


## Partner project
* [powerNice - 一款轻量级文档管理编辑器](http://h5.dooring.cn/powernice/views)
* [rc-drag - 基于react的轻量级拖拽缩放组件](https://github.com/MrXujiang/rc-drag)
* [frontend-developer-roadmap | 一个能提高开发者工作效率的前端js库汇总](https://github.com/MrXujiang/frontend-developer-roadmap)

## 赞助 | Sponsored
开源不易, 有了您的赞助, 我们会做的更好~

<img src="http://cdn.dooring.cn/dr/WechatIMG2.jpeg" width="180px" />

## 技术反馈和交流群 | Technical feedback and communication
微信：beautifulFront

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />

