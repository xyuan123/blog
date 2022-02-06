---
title: JS之reduce函数
date: 2022-01-14
tags:
 - reduce
categories:
 - JavaScript
---
::: tip 

这是一篇关于js reduce函数的文档o(￣▽￣)ｄ

:::

<!-- more -->
使用了`reduce`方法进行了数组求和,觉得这个函数挺高级的,就去[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)学习了一下。先上代码和结果,然后在介绍。

```js
    const sum = [1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(sum)
```

sum的结果是6

reduce函数接收**2**个参数,第一个参数是个回调函数(cb),第二个参数是累加器的初始值(看不懂不要紧看下方的表格),这里介绍回调函数的4个参数。和第二个参数累加器的初始值

| 参数名   |                         accumulator                          | currentValue                                                 | index                                                        | array                | initialValue           |
| -------- | :----------------------------------------------------------: | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------- | ---------------------- |
| 变量描述 |                            累加器                            | 当前项                                                       | 当前索引                                                     | 源数组               | 累加器初始值           |
| 详细解释 | 看上面我的写的`reduce`方法,如果你给了初始值(initialValue),那么第一次循环,累加器的值是你给的初始值(initialValue),如果你没给初始值,那么accumulator就是数组第一项的值,也就是索引为0的值,然后我不是return了`accumulator + currentValue`吗,这个return的值就会作为下一次累加器(accumulator)的结果再次进入循环运算,也就是说第一次运算,accumulator是1,第二次运算accumulator是1+2也就是**3**,第二次运算,accumulator是3+3=6,然后数组里面每一个值都参与运算了,6就作为返回值赋值到sum了 | 同map,filter,foreach方法第一个参数item,也即数组中当前遍历的项 | 这个有初始值(initialValue),index就为0,没有初始值就为1,因为没有初始值,accumulator是索引为0的值,这时候index为0就没意义了 | 调用reduce方法的数组 | 这个看你给不给初始值了 |
| 是否必传 |                              是                              | 是                                                           | 否                                                           | 否                   | 否                     |

## 用法举例

### 1.求数组的和

```js
// 0是累加器的初始值    
const sum = [1, 2, 3].reduce((arr, item, index) => {
      console.log(index)
      return arr + item
    }, 0)
    console.log(sum)
```



### 2.累加对象数组里面的值

```js
    // 累加对象数组里面的值
    const arr = [{ score: 9 }, { score: 10 }, { score: 11 }]
    const sum = arr.reduce((arr, item) => {
      return arr + item.score
    }, 0)
    console.log(sum)
```

### 3.二维数组转一维

```js
    // 将二维数组转换为一维,注意这里肯定得给累加器初始值一个空数组,然后结合扩展运算符
    const arr = [[1, 2], [3, 4], [5, 6]]
    const mergeArr = arr.reduce((arr, item) => {
      return [...arr, ...item]
    }, [])
    console.log(mergeArr)
```

### 4.计算数组中每个元素出现的次数

```js
// 看累加器里面有这一项没,有就把这一项的value+1,没有就把value赋值1    
const obj = arr.reduce((acc, item) => {
      // if (Object.keys(acc).indexOf(item) !== -1) {
      //   acc[item]++
      // } else {
      //   acc[item] = 1
      // }
      // return acc
      if (item in acc) {
        acc[item]++
      } else {
        acc[item] = 1
      }
      return acc
    }
      , {})
    console.log(obj)
obj结果:{1: 4, 2: 1, 3: 2, 5: 1, 6: 1, 31: 1, 45: 1}
```

### 5.按属性分类

比如后端传过来了以下数据

```js
     [
      {
        name: '小明',
        sex: '男'
      },
      {
        name: '小红',
        sex: '男'
      },
      {
        name: '小花',
        sex: '女'
      }
    ]
```

前端要根据性别去分类,也就是最终要弄成如下的数据形式

```js
{
      '男': [
        {
          name: '小明',
          sex: '男',
          id: 1
        },
        {
          name: '小红',
          sex: '男',
          id: 2
        },
      ],
      '女': [
        {
          name: '小花',
          sex: '女',
          id: 3
        }
      ]
    }
```

talk is cheap,show you my code

```js
    const arr = [
      {
        name: '小明',
        sex: '男',
        id: 1
      },
      {
        name: '小红',
        sex: '男',
        id: 2
      },
      {
        name: '小花',
        sex: '女',
        id: 3
      }
    ]
    const res = arr.reduce((acc, val) => {
      // 如果男或者女在对象里面找不到,那么就新增一个键名
      if (!(val.sex in acc)) {
        acc[val.sex] = []
      }
      acc[val.sex].push(val)
      return acc
    }, {})
    console.log(res)
```

### 6. 把对象数组中的数组合并起来

talk is cheap,show you my code

```js
    const arr = [
      {
        name: '小红',
        books: ['java', 'js']
      }, {
        name: '小明',
        books: ['c++']
      },
      {
        name: '小华',
        books: ['python']
      }
    ]
    const res = arr.reduce((acc, val) => [...acc, ...val.books]
      , [])
    console.log(res)
打印结果: ['java', 'js', 'c++', 'python']
```

### 7.数组去重

talk is cheap,show you my code

```js
    const arr = [1, 2, 3, 1, 1, 3, 5]
    const res = arr.reduce((acc, val) => {
      if (acc.indexOf(val) === -1) {
        acc.push(val)
      }
      return acc
    }, [])
    console.log(res)
打印结果: [1, 2, 3, 5]
```

插一嘴,其实数组去重我喜欢这样

```js
    const arr = [1, 2, 3, 1, 1, 3, 5]
    const orderArr = [...new Set(arr)]
    console.log(orderArr)
    怎么样,优雅不？
```

### 8.按顺序运行Promise

这个待更新...

## 博客

欢迎访问我的博客

[www.smartxy.cc](http://www.smartxy.cc/)
