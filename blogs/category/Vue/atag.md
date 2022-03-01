---
title: 奇怪的a标签
date: 2022-01-22
tags:
 - Vue
 - HTML
categories:
 - HTML
---
如果你发现在`vue`项目中给`a`标签加点击事件,然后在`methods`的事件处理函数中程序达不到预期的效果,比如该出的弹窗没有出来,考虑给点击事件加个`prevent`修饰符试试。

```html
  <a class="sindelet" @click.prevent="onDeleteCart(item)">删除</a>
```

