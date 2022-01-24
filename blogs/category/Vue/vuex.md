---

title: 让我的Vue得到重生(三)-与vuex来一次邂逅
date: 2022-01-19
tags:
 - Vue
categories:
 - Vue
---

::: tip 

最是人间留不住，朱辞颜镜花辞树，与vuex来一次完美的邂逅吧!o(**￣︶￣**)o

:::

<!-- more -->

先埋一个伏笔

<img src="../../../.vuepress/public/vue/vuex.png" alt="加载失败" style="zoom: 70%;float:none" align="left"/>

看不懂不要紧。这张图片只是一个伏笔

## 前奏

学习一个新的知识,应该带有一些目的性,或者了解一下相关背景,带着疑问去学一个东西,至少不会那么痛苦。(不要跟我说学习是快乐的,学习哪来的快乐(￣ー￣) (￣ー￣))

我们先看一个场景,一个很常见且简单的需求。

有2个兄弟组件A,B,现在A,B组件有一个`count`变量需要共享,也就是`count`改变了,两边组件的`count`都要改变,这时候除去我们知道的`vuex`，我们可以怎么做呢

1.使用中央总线`$bus`

2.把count放到A,B组件的父级组件上,然后父子组件传参

3.借用本地存储

思路肯定是没有问题的,问题也能够解决,但是,如果现在的场景是A,B,C三个组件(甚至是三个以上组件)都需要共享同一个变量呢?还用以上2种方法就显得非常麻烦和累赘了。带着这个问题,我们看看应该怎么处理。这时候就有同志问了,那为什么不借用本地存储呢？别急,继续往后看

## 主题

接下来介绍我们的主角:**vuex**

`vuex`官方称为vue的状态管理工具,通俗一点解释,就是一个大仓库,项目中的所有组件都可以向`vuex`这个大仓库拿东西,删东西,改东西。

但是需要遵循一定的游戏规则。并且仓库的东西被动了,会通知到所有的组件:’啊,我的东西被别的组件给修改了‘。所以`vuex`的数据是响应式的。这就是本地存储跟`vuex`很大的一个区别

先上用vue-cli4搭出来的`store`目录下`index.js`文件的脚手架代码,先说一下Vue的原型上是有`$store`属性的,这个可以认为是`vuex`仓库

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

```

我们看到vuex一共有5个模块,我们一一来进行分析

## State

`state`就是我上面所说的大仓库,所有的组件都可以拿到`state`里面的数据,再次强调一下,**state**里面的数据是响应式的。

我们在`state`里面搞一个变量`count`

```js
export default new Vuex.Store({
  state: {
      count: 1
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```



讲了这么多,我们开始上A组件的代码

```vue
<template>
  <div class="a-container">  
      <h3>我是A组件</h3>
    {{ $store.state.count }}
  </div>
</template>

<script>
</script>

<style scoped lang="less"></style>

```

在上B组件的代码

```vue
<template>
  <div class="b-container">
    <h3>我是B组件</h3>
    {{ $store.state.count }}
  </div>
</template>

<script>
export default {
  name: 'B',
  data () {
    return {}
  },
}
</script>

<style scoped lang="less"></style>

```

在上视图

<img src="../../../.vuepress/public/vue/vuex1.png" alt="加载失败" style="zoom: 70%;float:none" align="left"/>

很明显,`state`的值我们都拿到了。但是这时候问题又来了,如果一个组件或多个组件都需要使用这个`count`,那么我们在模板页面就要反复使用`$store.state.count`,觉不觉得点的有点麻烦?这时候我们又来了一个新东西,**mapState**辅助函数,这个辅助函数就是用来帮我们简化的我们操作的。

### 1.mapState辅助函数

`mapState`是`vuex`的辅助函数,主要用来帮助我们在开发中简化我们的操作,更方便的取到`state`中的值

#### 1.1mapState辅助函数的数组映射

话不多说,直接上代码

talk is cheap,show you my code

```vue
<template>
  <div class="b-container">
    <h3>我是B组件</h3>
    {{ count }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'B',
  computed: {
    ...mapState(['count'])
  },

}
</script>

<style scoped lang="less"></style>

```

这个地方我暂时还没找到比较好的解释方法,因为我觉得看代码足以能理解`mapState`函数怎么使用了。等我想到通俗易懂的语言来解释此处时,我会在更新文档。

#### 1.2 mapState辅助函数的对象式映射

这一部分你需要先了解`modules对象的相关知识`,在来看就比较好了,比如说modules模块有A，B个模块,也就是下面这样

```js
  state: {
    count: 1
  },
  mutations: {},
  actions: {},
  modules: {
    A,
    B
  }
```

那这时候你再用数组的方式把`vuex`的数据映射到当前组件,就肯定不行了,因为当前组件搞不清楚你这个`count`是哪个模块里面的了。

这时候就要用到对象式映射了

上代码

```vue
<template>
  <div class="a-container">
    <h3>我是A组件</h3>
    {{ count }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'A',
  data () {
    return {}
  },
  props: {},
  components: {},
  computed: {
    ...mapState({
        // 拿到state模块中的A分支,在取A分支中的count
      count: (state) => state.A.count
    })
  },
}
</script>

<style scoped lang="less"></style>

```

这一部分我觉得看我代码中的注释完全是能够理解的
