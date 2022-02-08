---
title: JS之splice和slice函数
date: 2022-02-07
tags:
 - js
categories:
 - JavaScript
---
::: tip 

这是一篇关于js Splice和slice函数的文档o(￣▽￣)ｄ

:::

<!-- more -->
今天看了一下JS的`Splice`和`slice`，之前总是搞的比较混

## Splice

**要注意splice方法时可以修改原数组的！！！**

`Splice`方法可以**替换,修改,删除**数组中的元素,这个方法我理解为接收3个参数,详细见表格。

| 变量名   | start                                                        | deleteCount                                                  | item1,item2,item3，...more |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------- |
| 描述     | 索引,可以理解为要操作的那个数组位置(这个地方是可以传负数的,传负数,你就倒着数-1就是最后一个元素,因为第一个元素索引为0嘛) | 从索引开始要删除的元素个数（这个地方是可以传负数的,传负数,你就倒着数-1就是最后一个元素,因为第一个元素索引为0嘛）但是写负数跟写0都是一样的,不删除元素,没什么意义 | 要添加的元素个数           |
| 是否必传 | 否(不传就相当于从索引位置开始,把后面的所有的元素全部删掉)    | 否                                                           | 否                         |

## 示例

### 示例1

```js
   	const arr = [1, 2, 3]
    const orderArr = arr.splice(1)
    console.log(arr) // [1]
    console.log(orderArr) // [2, 3]
```

可见splice方法的返回值是你删除的元素,数组本身也被修改了

### 示例2

```js
    const arr = [1, 2, 3]
    // 在索引为1的位置插个4,不删除数组中的元素
    const orderArr = arr.splice(1, 0, 4)
    console.log(arr)  // [1, 4, 2, 3]
    console.log(orderArr) // []
```

### 示例3

```js
	const arr = [1, 2, 3]
    // 在索引为1的位置插个4,5,不删除数组中的元素
    const orderArr = arr.splice(1, 0, 4, 5)
    // 不过我觉得这种写法更优雅一点
    // arr.splice(1, 0, ...[4,5])
    console.log(arr) // [1, 4, 5, 2, 3] 
    console.log(orderArr) // []
```



### 示例4

```js
    const arr = [1, 2, 3]
    // 先删除索引为1的元素,再把4插入到索引为1的地方
    const orderArr = arr.splice(1, 1, 4)
    console.log(arr) // [1, 4, 3]
    console.log(orderArr) // [2]
```

### 示例5

```js
    const arr = [1, 2, 3]
    // 删除索引为-2的元素
    const orderArr = arr.splice(-2, 1)
    console.log(arr) // [1, 3]
    console.log(orderArr) [2]
```

示例6

```js
    const arr = [1, 2, 3]
    // 删除索引为-2到后面所有的元素
    const orderArr = arr.splice(-2)
    console.log(arr) // [1]
    console.log(orderArr) // [2, 3]
```

## Slice

**slice方法不会修改原数组!!!**

slice方法接收2个参数

| 变量名   | begin                            | end                                     |
| -------- | -------------------------------- | --------------------------------------- |
| 描述     | 要截取的起始位置                 | 要截取的结束位置(不包含结束位置)        |
| 是否必传 | 否(不传默认为0,也是可以传负数的) | 否(不传默认到数组末尾,也是可以传负数的) |

### 示例

```js
    const arr = [1, 2, 3]
    const orderArr = arr.slice(1, 3)
    console.log(arr) // [1, 2, 3]
    console.log(orderArr) // [2, 3]
```

## tip

splice方法Vue是能监测到的,也就是你调数组的splice方法,数组的改变是能够影响视图的改变的