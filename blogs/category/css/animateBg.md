---
title: css给div加个关键帧动画动态改变背景图片抖动问题
date: 2022-03-07
tags:
 - css
categories:
 - Css
---
## 问题描述

给一个`div`加个关键帧动画,动态改变背景图片,会出现首次进入页面这个`div`背景图片出现抖动问题

`css`示例

```css
// 这样会出现抖动    
.demo {
      width: 100px;
       height: 100px;
      animation: demo 2s linear infinite;
    }
	@keyframes demo {
  0% {
    background: url('1.png')
      no-repeat;
    background-position: 0 -88px;
    background-size: 420px 1080px;
  }
  50% {
    background: url('2.png')
      no-repeat;
    background-position: 0 -88px;
    background-size: 420px 1080px;
  }
  100% {
    background: url('3.png')
      no-repeat;
    background-position: 0 -88px;
    background-size: 420px 1080px;
  }
}
```



## 解决方案

给该`div`一个`background`属性,提前把图片丢进去

```css
    .demo {
      width: 100px;
       height: 100px;
      animation: demo 2s linear infinite;
        background: url('1.png'),
            url('2.png'),
            url('3.png');
    }
	@keyframes demo {
  0% {
    background: url('1.png')
      no-repeat;
    background-position: 0 -88px;
    background-size: 420px 1080px;
  }
  50% {
    background: url('2.png')
      no-repeat;
    background-position: 0 -88px;
    background-size: 420px 1080px;
  }
  100% {
    background: url('3.png')
      no-repeat;
    background-position: 0 -88px;
    background-size: 420px 1080px;
  }
}
```

