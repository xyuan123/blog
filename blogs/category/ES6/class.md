---
title: ES6学习之路(七) 类
date: 2022-02-21
tags:
 - js
categories:
 - ES6
---

## 前言

终于到了老夫最喜欢的环节,ES6的类。这个学起来就比较有意思了<(￣︶￣)>。

## 老版新版对比

如果了解过`C++`，或者`java`，类的写法看起来就很舒服了

```js
    // 老版的构造函数
  function House(name) {
    this.name = name
  }
  House.prototype.openDoor = () => {
    console.log('door open')
  }
  // ES6类的写法
  class House {
    constructor(name) {
      this.name = name
    }
    openDoor () {
      console.log('door open')
    }
  }
  // 本质上两者都是一样的
```



## 类的方法

类上面的方法都是在类的原型上的,这里我们打印一下`House`

<img src="../../../.vuepress/public/ES6/class/1.png" alt="加载失败" style="zoom:100%;float:none" align="left"/>



发现`House === House.prototype.constructor`

## 遍历问题

先上代码

```js
    // 注意类名一般大写
    class House {
      constructor(name) {
        this.name = name
      }
      sellHouse() {
        // 逻辑
      }
    }
    console.log(Object.keys(House.prototype)) // []
```

`House.constructor`是一个对象,但是用`Object.keys`方法遍历不出来属性。说明类里面定义的方法是不可枚举的,要想拿到方法,要调`Object.getOwnPropertyNames`方法

```js
    // 注意类名一般大写
    class House {
      constructor(name) {
        this.name = name
      }
      sellHouse() {
        // 逻辑
      }
    }
    console.log(Object.getOwnPropertyNames(House.prototype)) // (2) ['constructor', 'sellHouse']
```

## 类里面的constructor方法

如果你学过`C++`或者`java`那么你对`new`关键字一定不陌生,在`js`它是用来生成实例对象的,请看代码和相关注释

```js
    // 注意类名一般大写
    class House {
      constructor(name) {
        console.log(`自动调用${name}`) // 自动调用夏鸣予
        this.name = name
      }
      sellHouse() {
        // 逻辑
      }
    }
	// 使用new关键字,自动调用类中的constructor方法,没有constructor方法,js引擎会自动给你的类加上这个方法
    const houseInstance = new House('夏鸣予')
```

## 类的实例

类的实例是共享原型的,也就是

```js
    // 注意类名一般大写
    class House {
      constructor(name) {
        console.log(`自动调用${name}`) // 自动调用夏鸣予
        this.name = name
      }
      sellHouse() {
        // 逻辑
      }
    }
    const house1 = new House('夏鸣予')
    const house2 = new House('玲珑心')
    console.log(house1.prototype === house2.prototype) // true
```

这里我想提一嘴,我以前记得构造函数的对象是有原型(`_proto_`)这一属性了,怎么今天测试打印的时候,`house1`和`house2`直接指向了这个类,好奇怪。

## 好文推荐

这里推荐一篇知乎上面解释原型和原型链很好的一篇文章[说说原型](https://zhuanlan.zhihu.com/p/35790971)。个人感觉通俗易懂。

突然感觉有点学不动了,下辈子做后端试试。

## 取值函数(get)与存值函数(set)

```js
    class House {
      set name(name) {
        console.log(name)
      }
      get name() {
        return '夏鸣予'
      }
    }
    const house = new House()
    house.name = '哎呀呀' // 哎呀呀
    console.log(house.name) // 夏鸣予
```

我把`get`,与`set`理解为修饰符,比如`name`属性被`get`和`set`修饰后,你给`name`赋值,那就会调用`set`修饰的`name`函数,你取`name`的值那就会调用`get`调用的`name`函数

## 属性表达式

其实吧,通俗的理解,我认为就是把本来应该是字符串的key变成了变量

示例:

```js
    let demo = 'demo111'
    class House {
      set name(name) {
        console.log(name)
      }
      get name() {
        return '夏鸣予'
      }
      [demo]() {
        console.log('hello world') // hello world
      }
    }
    const house = new House() 
    house[demo]()
```

我觉得这个地方还是有点小重要,因为学了`Symbol`类型就知道了。

## name属性

```js
    class House {
    }
    console.log(House.name) // House
```

## 静态方法

类中的方法,用`static`去修饰,它就是一个静态方法,静态方法只能被类本身调用

```js
    class House {
      static foo() {
        console.log(111)
      }
    }
    const house = new House()
    House.foo()
    house.foo() // Uncaught TypeError: house.foo is not a function
```

静态方法中的`this`指向这个类本身

## new.target

待补充...

学吐了。。。。

## 参考文档

[[ECMAScript 6 入门](https://es6.ruanyifeng.com/)](https://es6.ruanyifeng.com/#docs/class#%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95%E5%92%8C%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7)

## 博客

欢迎访问我的博客[www.smartxy.cc](http://www.smartxy.cc/)
