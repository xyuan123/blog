---
title: 微信小程序中使用vant
date: 2022-03-17
tags:
 - miniProgram
categories:
 - miniProgram
---
[vant-webapp连接](https://vant-contrib.gitee.io/vant-weapp/#/home)

## 1.npm初始化

### 1.1 新建终端

<img src="../../../.vuepress/public/miniProgram/useVant/terminal.png" alt="加载失败" style="zoom: 100%;float:none" align="left"/>

### 1.2 初始化npm

```npm
npm init -y
```

初始化`npm`报错,可能是你的文件目录是中文,尝试排查一下

### 1.3 npm安装依赖

<img src="../../../.vuepress/public/miniProgram/useVant/npmVant.png" alt="加载失败" style="zoom: 100%;float:none" align="left"/>

```npm
npm i @vant/weapp -S --production
```

###  1.4 构建npm

点右上角工具,点击构建`npm`

<img src="../../../.vuepress/public/miniProgram/useVant/created.png" alt="加载失败" style="zoom: 100%;float:none" align="left"/>


## 3页面使用

### 3.1注册组件

在页面的`JSON`文件里面注册,使用哪个组件,你就去注册哪个组件

```json
{
  "usingComponents": {
    "van-button": "@vant/weapp/button/index",
    "van-dialog": "@vant/weapp/dialog/index",
    "van-loading": "@vant/weapp/loading/index"
  }
}
```

