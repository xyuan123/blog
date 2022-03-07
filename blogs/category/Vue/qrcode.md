---
title: Vue中使用qrcode插件将后端给的支付url转为二维码图片
date: 2022-03-05
tags:
 - Vue
categories:
 - Vue
---

## 1.安装依赖

```npm
npm i qrcode
```

## 2.组件内导入

```js
import QRCode from 'qrcode'
```

## 3.处理事件函数使用

```js
const qrCodeImgUrl = await QRCode.toDataURL('后端给你的url')
```

`qrCodeImgUrl`就是二维码的图片链接,放到`img`标签的`src`属性上就可以了,正常应该用`try,catch`去包裹一下处理一下错误,不过我懒得包,感觉没这个必要。