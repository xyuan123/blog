---

title: Vue路由传参
date: 2022-01-07
tags:
 - Vue
categories:
 - Vue
---




::: tip 

这是一篇关于在Vue项目中路由传参的文章o(**￣︶￣**)o

:::

<!-- more -->

## 前奏

首先先埋一个伏笔,在配置路由时,大家应该都知道,要给路由起个名字,我们先配2个页面,一个home页,一个search页。

```javascript
 {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/Search')
  }

```



学习一个新的知识,应该带有一些目的性,或者了解一下相关背景,带着疑问去学一个东西,至少不会那么痛苦。(不要跟我说学习是快乐的,学习哪来的快乐(￣ー￣) (￣ー￣))

我们先看一个场景,一个很常见且简单的需求。

<img src="../../../.vuepress/public/vue/home.png" alt="加载失败" style="zoom: 70%;margin-right: 10%" align="left"/>

用户在首页点击搜索,然后页面跳到商品列表页面,也就是search页面,这个时候我们的前端逻辑就应该是,用户点击搜索,在点击事件里面进行路由跳转,这个时候问题就来了,进行路由跳转之后,肯定要展示商品列表,于是我们前端肯定就要根据用户输入的内容,调后端给我们的相关接口,再把后端返回给我们的商品数据渲染到search页面上。所以问题就来了,从home页到search页,怎么拿到用户输入的数据呢？带着这个问题,我们继续往下看。

##  主题

Vue在路由组件进行切换时是支持传递参数的,我们在任意一个路由组件的created钩子里面打印一下

```js
console.log(this.$route)
```

会看到控制台打印出以下路由对象

```js
{
fullPath: "/home"
hash: ""
matched: [{…}]
meta: {isShowFooter: true}
name: "Home"
params: {}
path: "/home"
query: {}
}
```

我们可以通过parms和query的方式去传递参数(还有props传参,最后再讲)

## Params传参

首页讲一下路由的params传参

用户点击搜索按钮,我们在事件处理函数里面可以这么写

```js
    goSearch () {
      this.$router.push({
        name: 'Search',
        params: {
            // this.commodityContent是用户输入的内容
          commodityContent: this.commodityContent
        }
      })
    }
```

这样就完成了路由的跳转并且把参数传到了search页面, 我们在search页面把$route打印一下看看

```	js
{
fullPath: "/search"
hash: ""
matched: [{…}]
meta: {isShowFooter: true}
name: "Search"
params:{
commodityContent: "test"
}
path: "/search"
query: {}
[[Prototype]]: Object
}
```

我们看到params多了个commodityContent属性,说明参数传过来了。

这时候学过的朋友们可能会吐槽了,那为什么不用以下的方式传参呢,垃圾!

```js
this.$router.push({
	path: '/search',
    params: {
        // this.commodityContent是用户输入的内容
        commodityContent: this.commodityContent
    }
}
)
```

别慌,跟着我的思路走,精彩的还在后面o(**￣︶￣**)o

## Query传参

用户点击搜索按钮,我们在事件处理函数里面可以这么写

```js
this.$router.push({
	path: '/search',
    query: {
        // this.commodityContent是用户输入的内容
        commodityContent: this.commodityContent
    }
}
)
```

我们在search页面把$route打印一下看看

```js
{
    fullPath: "/search?commodityContent=smile"
    hash: ""
    matched: [{…}]
    meta: {isShowFooter: true}
    name: "Search"
    params: {}
    path: "/search"
    query: {commodityContent: 'smile'}
    [[Prototype]]: Object
}
```

我们看到query多了个commodityContent属性,说明参数传过来了。

这时候学过的朋友们可能又会吐槽了,那为什么不用以下的方式传参呢,垃圾!

```js
this.$router.push({
	name: '/search',
    query: {
        // this.commodityContent是用户输入的内容
        commodityContent: this.commodityContent
    }
}
)
```

别慌,跟着我的思路走,精彩的还在后面o(**￣︶￣**)o

## 动态路径传参

这个由于用的不多,简单提一下

```js
 {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home'),
  },
  {
    path: '/search/:commodityContent',
    name: 'Search',
    component: () => import('../views/search/Search'),
  }

```

处理代码

```js
this.$router.push(`/search/${this.commodityContent}`
```

输入框输入test,点击搜索,页面的路径变为`http://localhost:8081/#/search/test`,可以看到输入的数据直接添加到路径上面了,

在search组件打印路由

```js
{
    fullPath: "/search/test"
    hash: ""
    matched: [{…}]
    meta: {isShowFooter: true}
    name: "Search"
    params:
    {
      commodityContent: "test"
    }
    [[Prototype]]: Object
    path: "/search/test"
    query: {}
    [[Prototype]]: Object
}
```

可以看到params对象里面接收到了用户输入的数据

## Props传参

vue2.x的官方文档有这么一份说明:在组件中使用 `$route` 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

使用 `props` 将组件和路由解耦

我理解的意思就是props传参是官方的推荐写法

这里直接教各位怎么用:

还是用params传参的方式

```js
   goSearch () {
      this.$router.push({
        name: 'Search',
        params: {
            // this.commodityContent是用户输入的内容
          commodityContent: this.commodityContent
        }
      })
    }
```

还记得我刚开始的伏笔吗,没错,它又起作用了,这时候我们要多增加一个属性在search路由上面

```js
 {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/Search'),
        //增加一个props: true的属性
    props: true
  }

```

这时候在home页面输入数据test2,在search组件添加如下代码:

```vue
 <template>
  <div class="search-container">我是搜索</div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {}
  },
  props: {
      // 直接在props里面接收home页面传过来的参数
    commodityContent: {
      type: String
    }
  },
  components: {},
  computed: {},
  watch: {},
  created () {
    console.log(this.commodityContent)
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>

```

经过测试,控制台是能正常打印test2的,这里我就不截图了。

其实吧,这种方式的确很好,接受参数的时候不需要在$route里面取参数

## Props对象传参

这个很容易理解,看下代码就能懂

```js
 {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/Search'),
    // 滴滴滴
    props: { name: '我是傻子' }
  }
```

## props函数式传参

这个也不难理解,其实就是在参数传到对应的组件时,还可以提前处理一下数据,但是实际项目用的不多,感觉了解一下就可以了

```js
 {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/Search'),
        //增加一个props: true的属性
    props: (route) => {
        return {
            name: route.params.name
        }
    }
  }
```

## 小细节

接下来就是一些细节性的东西了。

如果你在search路由进行了动态路径的配置

```js
 {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home'),
  },
  {
    path: '/search/:commodityContent',
    name: 'Search',
    component: () => import('../views/search/Search'),
  }
```

但是你在搜索按钮的事件处理函数并没有传参,也就是你是这样处理的

```js
this.$router.push('/search')
```

那么页面也会进行相应的跳转,但是会出问题,search组件时加载不出来的

**解决方案**：

在配置动态路径时后面加个？代表这个参数可有可无

```js
 {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home'),
  },
  {
      // 这里加个问号
    path: '/search/:commodityContent?',
    name: 'Search',
    component: () => import('../views/search/Search'),
  }
```

这些都是游戏规则,使用别人的框架,就得遵循这些规则。

## 鸡汤时刻

世界不黑也不白,而是一道精致的灰                                

------ 卡密尔

