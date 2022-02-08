---

title: Vue进阶-在vue项目中封装自己的插件
date: 2022-01-07
tags:
 - Vue
categories:
 - Vue
sticky: 3
---

::: tip 

这是一篇关于在Vue项目中开发自定义插件的文章o(*￣︶￣*)o

:::





<!-- more -->

## 前奏

学习一个新的知识,应该带有一些目的性,或者了解一下相关背景,带着疑问去学一个东西,至少不会那么痛苦。(不要跟我说学习是快乐的,学习哪来的快乐(￣ー￣) (￣ー￣))

我们先看一个场景,一个很常见且简单的需求,动态显示当前系统时间。

比如我们现在想在登录页面显示时间,我们可以这么做

talk is cheap,show you my code

```vue
<template>
  <div class="">
    {{ currentDate | transfromDate }}
  </div>
</template>

<script>
// moment.js是一个JavaScript日期处理类库
import moment from 'moment'
export default {
  name: 'Login',
  data () {
    return {
      currentDate: new Date(),
      // 定时器实例
      timer: null
    }
  },
  props: {},
  components: {},
  computed: {},
  watch: {},
  created () {
    // 时间每隔一秒递增
    this.timer = setInterval(() => {
      this.currentTime = new Date()
    }, 1000)
  },
  mounted () {},
  filters: {
    transfromDate: value => {
      const momentInstance = moment(value)
      // 这是直接返回系统的当前时间
      return momentInstance.format('YYYY[年]MM[月]DD[日] HH:mm:ss')
    }
  },
  methods: {},
  beforeDestoryed () {
    // 组件销毁前清除定时器实例
    clearInterval(timer)
    this.timer = null
  }
}
</script>

<style scoped lang="less"></style>

```



这么做的确是一点问题没有,但是问题来了,有没有更高级一点的写法呢,也就是能不能想办法把一些代码从这个Login组件抽离出来,把过滤的这一部分代码封装起来,答案是有。

## 主题

下面介绍我们的主角。

Vue的**install方法**,这个方法能让我们很自由的开发自己的vue插件。

话不多说,先上代码,再解释

在项目的src目录下新建一个filter文件夹,filter文件夹下面新建一个transfromDate.js文件,写入如下代码

```js
import moment from 'moment'
/* 时间转换过滤器,如若看不懂只需知道,在main.js文件中执行Vue.use(transfromDate),
即可自动执行install函数 */
export const transfromDate = {
  install: (Vue) => {
    Vue.filter('transfromDate', (value) => {
      const momentInstance = moment(value)
      return momentInstance.format('YYYY[年]MM[月]DD[日] HH:mm:ss')
    })
  }
}
```

这时候可能就会有人问了,贴个代码也不解释？别慌继续往下看。(～￣▽￣)～

入口文件**main.js**里面导入

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'
// 关于该css文件的作用,请参考该网址 https://www.cnblogs.com/ympjsc/p/12309784.html
import 'normalize.css/normalize.css'
// 全局css配置
import 'assets/css/globol.less'
// 饿了么UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 该js文件可以根据屏幕宽度的改变动态调整rem基准值
import '../public/js/flexible'
// 时间转换过滤器
import { transfromDate } from './filter/transfromDate'
// v-title指令,根据传入的值可以改变标题
import { vTitle } from './directives/vTitle'
import 'assets/css/iconfont.less'
// 导入主题
import '../public/static/theme/dark'
import '../public/static/theme/light'
// 原型注册echarts,这样在组件中使用this.$echarts就可以
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.use(vTitle)
Vue.use(transfromDate)
```

你只需注意这2句话

```javascript
import { transfromDate } from './filter/transfromDate'
Vue.use(transfromDate)
```

在执行Vue.use(transfromDate)的时候,Vue会找到transfromDate.js中的对象里面的install方法,然后去执行它,而这个install方法我们干了什么呢,没错,就是封装了一个全局的时间转换过滤器。

Vue的**install**方法接受2个参数,第一个是Vue这个类,第二个是个options配置项,不过options配置项我目前还没在相关项目用到过,等用到了在补充。

在main.js中引入后, 我们的Login.vue代码就可以改造了。改造如下

```vue
<template>
  <div class="">
    {{ currentDate | transfromDate }}
  </div>
</template>

<script>
// moment是一个JavaScript日期处理类库
export default {
  name: 'Login',
  data () {
    return {
      currentDate: new Date(),
      // 定时器实例
      timer: null
    }
  },
  props: {},
  components: {},
  computed: {},
  watch: {},
  created () {
    // 时间每隔一秒递增
    this.timer = setInterval(() => {
      this.currentTime = new Date()
    }, 1000)
  },
  beforeDestoryed () {
    // 组件销毁前清除定时器实例
    clearInterval(timer)
    this.timer = null
  }
}
</script>

<style scoped lang="less"></style>

```

其实吧,就是把过滤器那一部分抽了出来,封装成了一个全局过滤器插件。

## 总结

Vue.use(对象名)

对象名要暴露一个install方法,在执行Vue.use的时候,会自动执行该对象的install方法,然后如果你想要传一些变量进去,你可以这样

Vue.use(对象名,{key: value})

## 鸡汤时刻

人间骄阳正好，风过林梢，彼时我们正当年少。
