---
title: Vue中使用链式运算符
date: 2022-04-14
tags:
 - Vue
categories:
 - Vue
---
在`vue`项目中用[链式运算符我](http://www.smartxy.cc/blogs/category/ES6/operator.html#%E9%93%BE%E5%88%A4%E6%96%AD%E8%BF%90%E7%AE%97%E7%AC%A6)发现会报错,但是在有些`vue`项目中使用又不会报错,真是奇了个大怪。

附一下解决方案

### 1.npm安装依赖

```npm
npm install  @babel/plugin-proposal-optional-chaining 
```

### 2.babel.config.js中加入如下代码

```js
module.exports = {
  presets: ["@vue/app"],
    // 这个是要加的
  plugins: [
    "@babel/plugin-proposal-optional-chaining" // 可选链运算符 ?.
  ]
};
```

