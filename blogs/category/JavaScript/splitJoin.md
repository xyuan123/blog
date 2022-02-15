---
title: JS之split和join函数
date: 2022-02-015
tags:
 - js
categories:
 - JavaScript
---
## Join方法

描述: 将数组或者类数组对象所有元素用相同的分隔符连接成一个字符串,并返回这个字符串。

比较接地气的翻译: 数组转字符串

可传参数描述

| 变量名   | separator                                                    |
| -------- | ------------------------------------------------------------ |
| 变量描述 | 分隔符                                                       |
| 详细描述 | 传入的参数将作为分隔符分隔数组的每一项,如果不传,可以理解为把数组的两边扒掉,然后把扒掉的值设为一个字符串返回。 |
| 是否必传 | 否                                                           |

### 示例

```js
    const name = ['java', 'python', 'c++', 'javaScript']
    console.log(name.join()) // java,python,c++,javaScript
    console.log(name.join('')) // javapythonc++javaScript
    console.log(name.join('+')) // java+python+c+++javaScript
```

### 连接类数组对象

这个地方`Array.prototype.join.call(arguments)`我暂时还没整明白为什么这么使用,这里待补充...

```js
    function demo(x, y, z) {
      const joinStr = Array.prototype.join.call(arguments)
      console.log(joinStr) // 1,2,3
    }
    demo(1, 2, 3)
```

## Split

描述: 将字符串以指定的分隔符分割成数组

比较接地气的翻译: 字符串转数组

可传参数描述

| 变量名   | separator                              | limit                            |
| -------- | -------------------------------------- | -------------------------------- |
| 变量描述 | 分隔符                                 | 你理想中想让转换后的数组包含几项 |
| 详细描述 | 以分隔符来分隔字符串,并push到数组中    |                                  |
| 是否必传 | 否(不传就把这整个字符串变成一个数组了) | 否(不传转数组的时候就不存在限制) |

## 示例

```js
    const str = "a,b,c,d,ee"
    let transferStr = str.split(',') // ['a', 'b', 'c', 'd', 'ee']
    console.log(transferStr)
    transferStr = str.split()
    console.log(transferStr) // ['a', 'b', 'c', 'd', 'ee']
    transferStr = str.split(',', 1)
    console.log(transferStr)  // ['a']
```

### 结束语

分隔符也能传数组或者正则,因为个人觉得很冷门,且项目中基本不用(目前来说),所以我做了一下了解.如需了解,可自行查看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split#example_using_split)