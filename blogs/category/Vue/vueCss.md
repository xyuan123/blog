---

title: 在Vue项目中配合Animate.css + transition组件实现动画效果,给你的css加点料(add some water to your css)
date: 2022-01-24
tags:
 - Vue
categories:
 - Vue
---
::: tip 

v-show + v-if + transition 组件 + Animate.css 给你的css加点料o(￣︶￣)o

:::

<!-- more -->

先上2个链接: [Animate.css文档](https://animate.style/)

[Vuetransition组件官方文档](https://cn.vuejs.org/v2/guide/transitions.html)



这回不写前奏了,直接给教程。实在想不出来前奏应该怎么写。

## 教程

先上代码再讲

先在项目里面安装aimate.css

```npm
npm install animate.css --save
```

main.js(入口)文件引入

```js
import animated from 'animate.css'
Vue.use(animated)
```

项目中使用示例

```html
          <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
         	<div v-show或者v-if>
                你的内容
              </div>
          </transition>
```

解释:

`transition`组件是`Vue`的内置组件,当你的dom元素存在css的隐藏与显示,或者插入与删除时,你的dom元素外层就能用`transition`组件包裹,在配合一些vue自动给你生成的类名,添加一些过渡动画,说的简单点,就拿我上方的代码举例,当我的div显示与隐藏时,在刚显示时和刚隐藏时,会存在好几个类名,比如.v-fade-enter, v-fade-leave-to，然后你在类名里面添加css样式就能形成相关的动画了,但是我在项目里面一般不这么用,因为我Css动画学的有点差,(医生说我胃不好)所以我选择了走捷径。

`enter-active-class`可以理解为节点显示或插入时候的样式,然后后面`animate__animated`是写死的, `animate__fadeIn`是animate.css文档里面直接复制过来的动画类名

`enter-active-class`可以理解为节点隐藏或删除时候作用的类名,同上

这个组件,我觉得没必要学太深,有相关需求或者需要用到的时候,去官网查阅一下就行了。知道vue有这么个东西,就行了。

## 哲学时刻

不要因为没有掌声,而丢掉梦想。

