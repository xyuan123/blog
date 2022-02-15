---
title: JS之concat函数
date: 2022-02-13
tags:
 - js
categories:
 - JavaScript
---


## 数组的concat方法

用途: 合并2个或多个数组

| 变量名   | value1,value2,value3,...,valueN |      |
| -------- | ------------------------------- | ---- |
| 详细描述 | 值或者数组（可以传对象）        |      |
| 是否必传 | 否                              |      |

**要注意**,`concat`返回的是一个浅拷贝

示例:

### 1.连接2个数组

```js
const arr = [1, 2, 3].concat([4, 5])
console.log(arr) // [1,2,3,4,5]
```

### 2.连接3个数组

```js
    const arr1 = [1, 2]
    const arr2 = [3, 4]
    const arr3 = [5, 6]
    const arr4 = arr1.concat(arr2, arr3)
    console.log(arr4) // [1, 2, 3, 4, 5, 6]
```

### 3.连接值到数组

```js
    const arr1 = [1, 2]
    const arr2 = 3
    const arr3 = [5, 6]
    const arr4 = arr1.concat(arr2, arr3)
    console.log(arr4) // [1, 2, 3, 5, 6]
```

### 有趣的知识

talk is cheap,show you my code

```js
    const arr1 = [[1]]
    const arr2 = [3, 4]
    const arr3 = [5, 6]
    const arr4 = arr1.concat(arr2, arr3)
    console.log(arr4) // [[1], 3, 4, 5, 6]
    arr1[0].push(2)
    console.log(arr4) // [[1, 2], 3, 4, 5, 6]
```

```js
    const arr1 = [1]
    const arr2 = [3, 4]
    const arr3 = [5, 6]
    const arr4 = arr1.concat(arr2, arr3)
    console.log(arr4) // [1, 3, 4, 5, 6]
    arr1.push(2)
    console.log(arr4) // [1, 3, 4, 5, 6]
```

说点通俗点,如果连接的数组中有引用类型,那么这个引用类型是共享的,其实吧,刚开始我说的返回的是浅拷贝,你就应该懂了。

#### 对象也是可以连的

```js
    const arr1 = [1]
    const arr2 = [3, 4]
    const arr3 = {
      a: 1,
      b: 2
    }
    const arr4 = arr1.concat(arr2, arr3)
    console.log(arr4) // [1, 3, 4, {a:1, b:2}]
```

###  Symbol.isConcatSpreadable

对象有一个`Symbol.isConcatSpreadable`属性,表示在使用`concat`方法是是否展开(注意这里是作为参数时是否展开)

* 数组是默认展开的
* 对象是默认不展开的

数组默认展开

```js
    const arr1 = [1]
    const arr2 = [3, 4]
    const arr3 = arr1.concat(arr2)
    console.log(arr3) // [1, 3, 4]  arr2展开了
```

```js
    const arr1 = [1]
    const arr2 = [3, 4]
    arr2[Symbol.isConcatSpreadable] = false
    const arr3 = arr1.concat(arr2)
    console.log(arr3) // [1,[3,4]] arr2没有展开
```

对象默认不展开

```js
    const arr1 = [1]
    const obj2 = {
      a: 1,
      b: 2
    }
    const arr3 = arr1.concat(obj2)
    console.log(arr3) // [1,{a:1, b:2}] 对象默认不展开
```

```js
    const arr1 = [1]
    const obj2 = {
        // 注意这个地方要加length属性,如果你要展开的话
      length: 2,
      0: 2,
      1: 3
    }
    obj2[Symbol.isConcatSpreadable] = true
    const arr3 = arr1.concat(obj2)
    console.log(arr3) // [1,2,3]
```

## 字符串的concat方法

示例

```js
  const str1 = 'aa'
    const str2 = str1.concat('bb')
    console.log(str2) // aabb
```

`MDN`上强烈建议使用[赋值操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)（`+`, `+=`）代替 `concat` 方法。感觉了解一下就行了

