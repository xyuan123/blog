---
title: Echarts字体自适应
date: 2022-02-16
tags:
 - echarts
categories:
 - Echarts
---
## 问题描述

做大屏时可能会遇到这种情况,图表可以根据容器(`div`)的大小自动调整,因为你可以在相关配置项中设置为百分比,但是字体大小就不一样了,你只能传个写死的数字。这里记录一下怎么做到文字自适应。

## 解决方案

在`methods`里面搞一个方法,举个例子，比如美工给你的设计稿是1920*1080的,字体大小你量的是30px,那么网页加载时,获得屏幕的宽度,然后用屏幕宽度除以1920,得到比例,用30px乘以比例,就是你想要的字体大小了。比如在960px宽度的屏幕上,比例就是960 / 1920 = 0.5,

得到的字体大小就是15px。

```js
    // 根据不同的屏幕宽度换算字体大小
    transformFontSize(fontsize) {
        // 获取屏幕宽度
      const width = window.screen.width
      const ratio = width / 1920
      // 取下整
      return parseInt(fontsize * ratio)
    }
```

`echarts`配置项使用示例:

```js
           label: {
              normal: {
                formatter: this.waterData[2] + '',
                textStyle: {
                  fontSize: this.transformFontSize(32),
                  color: '#dbfbfc'
                },
                position: ['50%', '30%']
              }
            }
```

## 实际项目使用示例

实际项目我一般使用混入,因为图标比较多,方法具有通用性。贴混入代码

```js
/* eslint-disable */
export default {
  data() {
    return {
      // echarts的实例
      myChart: null
    }
  },
  mounted() {
    // 监听屏幕大小变化
    window.addEventListener('resize', this.screenAdatper)
  },
  methods: {
    screenAdatper() {
      this.myChart && this.myChart.resize()
    },
    // 根据不同的屏幕宽度换算字体大小
    transformFontSize(fontsize) {
      const width = window.screen.width
      const ratio = width / 1920
      return parseInt(fontsize * ratio)
    }
  },

  beforeDestoryed() {
    // 组件销毁前移除监听,防止内存泄露
    window.removeEventListener('resize')
  }
}
/* eslint-disable */

```

