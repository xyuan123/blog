---
title: ES6学习之路(九)-Promise
date: 2022-02-22
tags:
 - js
categories:
 - ES6
---
对于`Promise`,记录一下自己工作和学习中常用的一些操作和技巧

## 使用Promise封装函数

待补充。。。

## 使用Promise.all发送并发请求

```js
    const p1 = new Promise(resolve => {
      setTimeout(() => {
        resolve('1')
      }, 500)
    })
    const p2 = new Promise(resolve => {
      setTimeout(() => {
        resolve('2')
      }, 1000)
    })
    // resp1为
    async function demo() {
      const [resp1, resp2] = await Promise.all([p1, p2])
      console.log(resp1, resp2) // 1, 2
    }
    demo()
```

## Promise.race获取最先返回的值

```js
    const p1 = new Promise(resolve => {
      setTimeout(() => {
        resolve('1')
      }, 500)
    })
    const p2 = new Promise(resolve => {
      setTimeout(() => {
        resolve('2')
      }, 1000)
    })
    async function demo() {
      const resp1 = await Promise.race([p1, p2])
      console.log(resp1) // 1
    }
    demo()
```

## Promise.allSettled请求完成继续下一步

```js
    const p1 = new Promise(resolve => {
      console.log(1)
      setTimeout(() => {
        resolve('1')
      }, 500)
    })
    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('fail'))
      }, 1000)
    })
    async function demo() {
      await Promise.allSettled([p1, p2])
      console.log('夏鸣予')
    }
    demo()
```

## 总结

* 1.逻辑处理中,可能会出现2种状态,比如生成一个`img`标签,再给src属性,那么会存在图片加载成功或者加载失败2种状态,这时候就可以考虑用`Promise`包装了。
* 2.我发现`new Promise`的时候里面的语句就已经执行了。
* 3.`async`和`await`出来之后我基本上不用`.then`的方式去写处理逻辑了。

