---
title: 微信小程序imgae标签无法撑满父容器
date: 2022-02-25
tags:
 - miniProgram
categories:
 - miniProgram
---
## 问题描述

<img src="../../../.vuepress/public/miniProgram/record1/1.png" alt="加载失败" style="zoom:100%;float:none" align="left"/>

在`view`标签里面加`image`标签,view标签的宽是有的,但是高度没有,image标签的宽度我给了100%,但是我发现了一个问题,就是`image`标签底部跟`view`标签底部是有一个细小的距离的,真是奇了个大怪啊。

## 解决方案

外层容器`view`标签加个`display:flex`属性