---
title: 恶补js基础第二轮
date: 2022-03-03
tags:
 - js
categories:
 - JavaScript
---
## 函数

### 1.变量提升

```js
    var a = () => {
      console.log(1)
    }
    function a() {
      console.log(2)
    }
    a() // 打印1
```

个人理解: 待补充

### 2.length属性

返回需要传入的形参数量

```js
   function demo(a, b, c) {

    }
    console.log(demo.length) // 3
```

### 3.函数的作用域

函数的作用域是在声明的时候绑定的,而不是运行的时候绑定的,`bar`绑定的是全局作用域,并没有绑定到`foo`环境中

```js
    const bar = () => {
      console.log(a) //  a is not defined
    }
    const foo = () => {
      const a = 1
      bar() 
    }
    foo()
```

```js
    const foo = () => {
      const a = 1
      const bar = () => {
        console.log(a) //  1
      }
      bar()
    }
    foo()
```

### 4.函数传参

#### 4.1给函数传参可以多传,少传,不传,不传默认`undefined`

```js
    function foo(x, y) {
      console.log(x) // undefined
      console.log(y)// undefined
    }
    foo()
```

传基本数据类型在函数体内部可以随便修改,不影响原来的变量,传引用类型(对象,函数,数组),修改内部的属性会导致原来的数据也发生变化。

#### 4.2 2个形参同名,函数体内部默认取最后一个

```js
    function foo(x, x) {
      console.log(x) // 2
    }
    foo(1, 2)
```

### 5.arguments参数

`arguments`给我的理解就相当于游戏里面的菜单,我记得以前看过这个被叫做隐式参数。它能够获取所有传入的参数。

```js
    function foo(x, x) {
      console.log(arguments) // Arguments(4) [1, 2, 3, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    }
    foo(1, 2, 3, 5)
```

看的书有点老,`arguments`转数组都用`ES6`之前的方法,现在用`Array.from`方法就可以将伪数组转数组了。

```js
    function foo(x, x) {
      const arrArguments = Array.from(arguments)
      console.log(Array.isArray(arrArguments)) //  true
    }
    foo(1, 2, 3, 5)
```

## 闭包

闭包我的理解就是函数能够返回一个函数,返回的函数用到了外层函数的变量,所以导致了外层函数的变量不会被垃圾回收机制清除,一直存在,说白了就是变量占用,导致本该回收的变量回收不了。

```js
    function foo(number) {
      return () => {
        console.log(number++)
      }
    }
    const bar = foo(5)
    bar() //  5
    bar() // 6
    bar() // 7
```

