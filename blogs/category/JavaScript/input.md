---
title: input输入框的一些总结(`pc`端)
date: 2022-02-26
tags:
 - js
 - vue
categories:
 - JavaScript
---


* `change`事件是在失焦的时候触发的,但是如果你输入的值跟原来的值一样,失焦的时候是不是触发`change`事件的
* 在输入框里面按回车键也是能触发`change`事件的,但是要保证输入的值跟原来的值不一样

`vue`项目中给`input`的`value`属性也可以动态绑定一个变量,但是这种方式跟`v-model`的区别是给`value`动态绑定的变量与`input`输入框输入的值不是双向绑定的,也就是你把变量绑在`value`上,这个`value`就是死的,变量是多少`value`就是多少,不能手动输入值。

你用`v-model`去绑,那就可以实现双向绑定

然后给一个购物车输入判定的函数

```js
// 处理用户在购物车商品数量的输入
// 如果用户输入的是非数字或者输入的值小于1,直接把输入的值置1,否则对输入的数据取整
export default function (inputValue) {
  let handleValue = 1
  if (isNaN(inputValue) || inputValue < 1) {
    handleValue = 1
  } else {
    handleValue = parseInt(inputValue)
  }
  return handleValue
}

```

其他的项目碰到再补充...