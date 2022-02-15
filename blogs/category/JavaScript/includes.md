---
title: JS之includes函数
date: 2022-02-13
tags:
 - js
categories:
 - JavaScript
---
`includes`函数是`ES6`新增的方法,是我认为在实际项目中实用性非常强的一个函数。

作用: 

* 判断数组是否包含指定的值
* 判断字符串是否包含指定的子串

包含返回`true`,不包含返回`false`

数组或者字符串都能够使用。

| 变量名   | **valueToFind**                                    | **fromIndex**                                                |
| -------- | -------------------------------------------------- | ------------------------------------------------------------ |
| 描述     | 数组:你要找的那个元素。字符串:你要找的那个字符串。 | 起始索引                                                     |
| 详细解释 |                                                    | 传1,就从索引(index)为1的那个元素开始找,传-1,就从后往前数,因为第一个元素索引是0,所以-1就是倒数第一个,-2就是倒数第二个。都是从索引处找到最后一个元素。**如果fromIndex大于等于数组长度,直接返回false**。如果**fromIndex**过小,比如一个数组长度是3,你**fromIndex**是-4,从后往前跳跳不了4个单位。可以理解为**fromIndex**为0。 |

### **fromIndex**大于等于数组长度直接返回false

```js
    const arr = [1, 2, 3]
    console.log(arr.includes(2, 3)) // false
    console.log(arr.includes(2, 100)) // false
 -----------------------华丽的分割线--------------------------------------
            const str = 'do not worry be happy'
    console.log(str.includes('do')) // true
    console.log(str.includes('don'))  // false
```

## 类数组对象也是可以调用该方法的

```js
    function demo(x, y, z) {
      console.log([].includes.call(arguments, 1)) // true
    }
    demo(1, 2, 3)
```

## 总结

我个人认为,`includes`方法好就好在,它返回的是一个布尔值,这样在项目中使用时,直接用if(返回的值就可以了),相较于`indexOf`方法用起来十分方便。但各有各的好,`indexOf`方法在其他场景比如配合`splice`方法删除元素时就挺好用的。
