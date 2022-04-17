---
title: webpack学习笔记
date: 2022-04-17
tags:
 - webpack
categories:
 - webpack
---
## 相关命令

### 打包

`webpack`

### 查看打包相关详细信息

`webpack --stats detailed`

### 设置打包入口文件

`webpack --entry 文件路径`

### 设置打包模式

`webpack --mode production/development`

### 修改文件自动打包

```webpack
webpack --watch
```

### 热更新(ctrt+s后页面自动更新内容)

1. 先安装依赖

```npm
npm i webpack-dev-server
```

2. 修改配置项

   ```js
     devServer: {
       // 提供静态文件目录地址,就是热更新时候浏览器编译的文件目录
       static: './dist',
     }
   ```

   3.启动项目

   ```webpack
   webpack-dev-server
   ```

   



## 配置

```js
const path = require('path');
// 插件
// html自动生成插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// css抽离插件
const MineCssExtractPlugin = require('mini-css-extract-plugin');
// css压缩插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
  // 打包的入口文件
  entry: {
    // 多个入口打包
    index: './src/index.js',
    // another: './src/lodash.js',
  },
  output: {
    // 生成的js名字
    filename: 'js/[name].[contenthash].js',
    // 输出的文件目录
    path: path.resolve(__dirname, 'dist'),
    // 每次打包清除dist文件夹下面的内容
    clean: true,
    // 默认输出的静态资源文件名
    assetModuleFilename: 'images/[contenthash][ext]',
  },
  devServer: {
    // 提供静态文件目录地址,就是热更新时候浏览器编译的文件目录
    static: './dist',
  },
  // 追踪源代码出错位置
  devtool: 'inline-source-map',
  // 开发环境 | 生产环境
  mode: 'production',

  plugins: [
    new HtmlWebpackPlugin({
      // 标题
      title: 'aavv',
      // 以哪个html为模板
      template: './src/index.html',
      // 生成的html文件名
      filename: 'app.html',
      // 脚本等相关文件注入到哪里
      inject: 'body',
    }),
    new MineCssExtractPlugin({
      filename: 'css/[contenthash].css',
    }),
  ],
  module: {
    // 配置规则
    rules: [
      // {
      //   // 匹配哪些文件
      //   test: /\.png$/,
      //   // 同之前的file-loader
      //   // file-loader 就是一个可以用来处理图片字体等文件资源的 loader，它的处理方式是将资源复制到打包后的文件夹，并重命名。
      //   type: 'asset/resource',
      //   // 生成的文件信息
      //   generator: {
      //     // 文件名 contenthash:根据文件内容生成hash值
      //     filename: 'img/[contenthash][ext]',
      //   },
      // },
      {
        test: /\.(svg|png)$/,
        // 目前的理解是图片转成base44
        type: 'asset/inline',
      },
      {
        test: /\.txt$/,
        // 将文件源代码原样输出
        type: 'asset/source',
      },
      {
        test: /\.jpg$/,
        // 让webpack自己选转base64还是转成图片存到打包后的文件夹
        type: 'asset',
        // 解析器
        parser: {
          // 资源转换规则
          dataUrlCondition: {
            // 图片小于2M转base64
            maxSize: 2 * 1024 * 1024,
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [MineCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        // 排除node_modules文件夹下的文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // babel-loader的配置项
          options: {
            // 支持一系列es6语法
            presets: ['@babel/preset-env'],
            // 支持async await语法
            plugins: [['@babel/plugin-transform-runtime']],
          },
        },
      },
    ],
  },
  // 优化配置
  optimization: {
    // 通过自定义插件覆盖默认插件配置
    minimizer: [new CssMinimizerPlugin()],
    // 一个插件,用来抽离公共代码
    splitChunks: {
      // all不管是异步加载还是同步加载的公共模块都会被抽离
      // chunks: 'all',
      // 哪些模块需要缓存,一般第三方模块需要缓存
      cacheGroups: {
        // 抽
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
```

## 插件

插件提供了一些额外的强大功能,我的理解相当于游戏外挂

### html-webpack-plugin

功能: 自动帮你生成`html`文件,并且让你在生成`html`时以其他`html`文件作为模板

`npm`安装依赖

```npm
npm install --save-dev html-webpack-plugin
```

[配置项文档](https://github.com/jantimon/html-webpack-plugin#options)

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  plugins: [new HtmlWebpackPlugin()],
};
```

配置项笔记

| 变量名   | 类型               | 示例         | 描述                                             |
| -------- | ------------------ | ------------ | ------------------------------------------------ |
| title    | String             | 我好帅       | 生成的`html`文件标题                             |
| template | String             |              | 将生成的`html`文件以哪个现有的`html`文件作为模板 |
| filename | String \| Function | `index.html` | 生成的`html`文件名                               |
| inject   | String \| Boolean  | body         | 将生成的`js`，`css`文件插入到哪里                |

### mini-css-extract-plugin

功能:  css抽离插件(抽离成单独的css文件)

使用:

1.安装依赖

```npm
npm i mini-css-extract-plugin -D
```

2.引入

`const MineCssExtractPlugin = require('mini-css-extract-plugin')`

3.插件注册

```js
 plugins: [
    new HtmlWebpackPlugin({
      // 标题
      title: 'aavv',
      // 以哪个html为模板
      template: './src/index.html',
      // 生成的html文件名
      filename: 'app.html',
      // 脚本等相关文件注入到哪里
      inject: 'body',
    }),
     // here
    new MineCssExtractPlugin({
      filename: 'css/[contenthash].css',
    }),
    new CssMinimizerPlugin(),
  ],
```

4.`loader`使用

```js
{
        test: /\.(css|scss)$/,
        use: [MineCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
```



### css-minimizer-webpack-plugin

css压缩插件

1.安装依赖

```npm
npm i css-minimizer-webpack-plugin
```

2.引入

`const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')`

3.配置

```js
  // 优化配置
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
```



## Assets Module

资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。其实就是废弃了以前的什么`file-loader`,`url-loader`等等资源处理的插件.

### asset/resource

将资源原样输出到打包后的文件夹

### asset/inline

将图片资源转成base64

### asset/source

将文件源代码原样输出

```webpack
module: {
    // 配置规则
    rules: [
      {
        // 匹配哪些文件
        test: /\.png$/,
        // 同之前的file-loader
        // file-loader 就是一个可以用来处理图片字体等文件资源的 loader，它的处理方式是将资源复制到打包后的文件夹，并重命名。
        type: 'asset/resource',
        // 生成的文件信息
        generator: {
          // 文件名 contenthash:根据文件内容生成hash值
          filename: 'img/[contenthash][ext]',
        },
      },
      {
        test: /\.(svg|png)$/,
        // 目前的理解是图片转成base44
        type: 'asset/inline',
      },
      {
        test: /\.txt$/,
        // 将文件源代码原样输出
        type: 'asset/source',
      },
    ],
  },
```

## loader	

`loader`可以让`webpack`拥有解析除`js`和`json`以外格式的文件比如`css`，图片文件

加载`scss`文件

安装依赖

```json
    "css-loader": "^6.7.1",
    "node-sass": "^7.0.1",
    "sass": "^1.50.0",
    "sass-loader": "^12.6.0",
    "style-loader": "^3.3.1",
```



配置

```js
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
```

### babel-loader

`babel-loader`能将es6以及更高的语法转成es5的

安装依赖

```npm
npm install -D babel-loader @babel/core @babel/preset-env
```

继续安装依赖

```npm
npm i @babel/plugin-transform-runtime
npm install --save @babel/runtime
```

`webpack`配置

```js
      {
        test: /\.js$/,
        // 排除node_modules文件夹下的文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // babel-loader的配置项
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-runtime']],
          },
        },
      },
```

## 代码分包

### 1.动态导入(懒加载)

使用`import.then`语法

懒加载的好处就是打包的体积不变,但是浏览器对于使用懒加载的模块是不会去加载这些`js`文件的,用到的时候才会加载这些文件

#### 1.1 魔法注释

`/* webpackChunkName: "my-chunk-name" */`

相关的块起名字,名字将在打包后的文件夹下看到

`/*webpackPrefetch: true */`

浏览器会在空闲时间把模块下载下来,存到缓存中

缺点: 不利于网页流量统计

还有一个`webpackPreload`，但是好像不常用,也是预加载,但是优先级跟别的`chunk`块是一样的

### 2.插件配置

```js
    //  一个插件,用来抽离公共代码
     splitChunks: {
       // all不管是异步加载还是同步加载的公共模块都会被抽离
       chunks: 'all',
     },
```

### 3.多个入口起点

```js
 entry: {
    // 多个入口打包
    index: './src/index.js',
    // another: './src/lodash.js',
  },
```

