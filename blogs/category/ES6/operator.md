---
title: ES6学习之路(四) 运算符的扩展
date: 2022-02-10
tags:
 - ES6
 - JavaScript
categories:
 -  ES6
---
## 指数运算符

```js
    const a = 3 ** 3
    console.log(a) // 27
```

指数运算符的计算方向为从右向左

```js
  const a = 1 ** 3 ** 2
    console.log(a) // 1
先算3的2次方是9,再算1的9次方是1
    const a = 2 ** 1 ** 2
    console.log(a) // 2
// 先算1的2次方是1再算2的1的方是2
```

## 链判断运算符

```js
    const obj = {
    }
    console.log(obj?.a) // undefined
    const obj1 = {
      a: 1
    }
    console.log(obj1?.a) // 1
```

`obj?.a`可以理解为`obj && obj.a || undefined`

obj对象里面有没有a这个属性,有的话就取a值,没有的就取`undefined`

更多的链式操作

```js
    const obj = {
      a: {
        b: {
          c: 1
        }
      }
    }
    const d = obj && obj.a && obj.a.b && obj.a.b.c || undefined
    console.log(d) // 1
```

```js
// 链式操作
    const obj = {
      a: {
        b: {
          c: 1
        }
      }
    }
    const d = obj?.a?.b?.c
    console.log(d) // 1
```

### 运行函数

```js
    const obj = {
      a: {
        b: {
          c: () => {
            return 3
          }
        }
      }
    }
    const d = obj?.a?.b?.c()
    console.log(d) // 3
```

## 短路机制

```js
// 链式操作
    const obj = {
      a: {
        b: {
        }
      }
    }
    const d = obj?.a?.b?.c
    console.log(d) // undefined
    // 只要有一个地方的值为undefined或者null,程序就不会往后走(判断)了
```

## NULL判断运算符

### 经典的设置默认值方法

```js
    const foo = 1
    const bar = foo || 100
    console.log(bar)  // 1
```

程序员如果本身希望foo为`undefined`或者`null`时给默认值100,那么就有问题了。因为`foo`为`false`或者0或者空字符串的时候,也会赋予默认值。

如果你只希望foo为`undefined`或者`null`的时候赋默认值,你可以这样

```js
    const foo = ''
    const bar = foo ?? undefined
    console.log(bar) // ''
```

其他的项目碰到再待补充....