---

title: Vue子父组件传值的一些发现
date: 2022-03-13
tags:
 - Vue
categories:
 - Vue
---

## 子组件传值

` this.$emit('get-attr', category1Id, category2Id, category3Id)`

## 父组件监听

`<CategorySelect @get-attr="onGetAttr" />`

### 函数处理

```js
  methods: {
    // args存的是1id, 2id, 3id
    onGetAttr(...args) {
      console.log(Array.isArray(args)) // true
    },
      // 当然,正常接收子组件的参数是这样,我是图省事
     onGetAttr(category1Id, category1Id, category1Id) {
    }
  }
```

我一直以为`args`是个集合,也就是伪数组,没想到`args`竟然是个**数组**!