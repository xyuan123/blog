---
title: ES6学习之路(五) js的Symbol类型
date: 2022-02-10
tags:
 - js
categories:
 - ES6
---

## 简介

新方法或事物的出现,总是需要伴随着能够解决一些问题。`Symbol`数据类型的出现就是为了解决变量属性名称相同的这一个问题。

上代码

```js
    const s = Symbol()
    console.log(s) // Symbol()
    console.log(typeof s) // symbol
```

这样就创建了一个`Symbol`类型的变量`s`，这里我的理解是,把`s`看做一个`Symbol`类型的变量。

`Symbol`函数时能够接受参数的,接受参数只是作为一个区分的意思

``` js
    const s = Symbol('foo')
    const t = Symbol('bar')
    console.log(s) // Symbol(foo)
    console.log(t) // Symbol(bar)
```



要注意`Symbol`函数的返回值是新一个新的内存空间,`s`,`t`,`p`,`q`都是引用类型

```js
    const s = Symbol()
    const t = Symbol()
    console.log(s === t) // false
    const p = Symbol('foo')
    const q = Symbol('foo')
    console.log(p === q) // false
```

`symbol` 值不能与其它类型的值进行运算

```js
    const s = Symbol()
    console.log(s + '')  //  Cannot convert a Symbol value to a string
```

但`symbol`能显示的转为字符串

```js
    const s = Symbol()
    console.log(String(s))  // Symbol()
```

`symbol`也可以转为布尔值,说实话个人感觉这里没什么用

```js
    const s = Symbol()
    console.log(Boolean(s))  // true
```

## 获取Symbol的描述

获取symbol的描述可以用`description`属性

```js
    const s = Symbol('foo')
    console.log(s.description) // foo
```

以下三种方式都可以将`symbol`作为属性名

```js
    const s = Symbol('foo')
    const obj = {}
    第一种写法
    // obj[s] = 1
    第二种写法
   /*  Object.defineProperty(obj, s, {
      value: 1
    }) */
    第三种写法
/*      const obj = {
      [s]: 1
    } */
```

学到这里,我对`symbol`的理解就是,就拿上面的例子来说,s就相当于一个`symbol`类型的变量,也是一个`key`值,但是`s`不能理解为是一个字符串,因为看上面取值的时候不是用`.`运算符的形式去取的。

## 消除魔术字符串

这个我的理解就是,在函数中用`if`语句或者用`switch`语句判断相等,比如`if(data === 'xiaoyuan')`，如果这个`xiaoyuan`字符串多次进行了判断,那么就是魔术字符串了,这么一搞,不利于程序的维护,的确不利于,比如以后这个`xiaoyuan`要修改成其他的字符串,就要改很多地方。最好的就是弄成一个变量,用代码描述如下。

```js
    const username = {
      xiaoyuan: 'xiaoyuan'
    }
    function getUserInfoByUserName(name) {
      if (name === username.xiaoyuan) {
        return 'success'
      } else {
        throw new Error('fail')
      }
    }
    getUserInfoByUserName(username.xiaoyuan)
```

如果产品经理告诉你,用户的每一个名字都是不一样的,那么`key`为`xiaoyuan`的`value`值其实就不那么重要了,这时候你只要保证每个用户的value值不一样就行了。所以就可以用`symbol`

```js
    const username = {
      xiaoyuan: Symbol()
    }
    function getUserInfoByUserName(name) {
      if (name === username.xiaoyuan) {
        return 'success'
      } else {
        throw new Error('fail')
      }
    }
    getUserInfoByUserName(username.xiaoyuan)
```

## Object.getOwnPropertySymbols()方法获取symbol属性数组

`symbol`类型的值用普通的遍历方式是遍历不出来的,比如`Object.keys`方法,`for in`,`for of`等等,获取`symbol`属性要用`Object.getOwnPropertySymbols()`方法

示例:

```js
    const xiaoyuan = Symbol('xiaoyuan')
    const dayuan = Symbol('dayuan')
    const username = {
      [xiaoyuan]: 1,
      [dayuan]: 2
    }
    for (item in username) {
      console.log(item) // 啥都没有
    }
    console.log(Object.getOwnPropertySymbols(username)) // [Symbol(xiaoyuan), Symbol(dayuan)]
```

## 感慨时间

看到这里,我内心无比痛苦,因为我觉得这个知识点过于枯燥,并且我目前在项目中也没碰到。所以学习起来无比痛苦,看了一下进度条,还有一半的`symbol`知识,卧槽,坚持一下吧,学完了我要去刷会抖音奖励一下自己。

## Symbol.for(), Symbol.keyfor()方法

### Symbol.for()

上代码以示区别

```js
    const demo1 = Symbol('foo')
    const demo2 = Symbol('foo')
    console.log(demo1 === demo2) // false
    const demo3 = Symbol.for('bar')
    const demo4 = Symbol.for('bar')
    console.log(demo3 === demo4) // true
```

这个我的理解就是,`Symbol.for`方法也是能创建一个`Symbol`类型的变量的,但是跟`Symbol()`方法不同的是,它创建的时候会进行全局注册,

也就是说,使用`Symbol.for('bar')`方法时,它会先在代码里面去找,看你之前的代码里面有没有声明过这个`Symbol.for('bar')`,如果有,就直接把之前的这个拿来用,说白了`demo3`,`demo4`的指针指向的堆区都是一样的。更通俗的理解是看堆区里面有没有,有就把指针拿过来用。

### Symbol.keyfor()

`Symbol.keyfor()`方法返回用`Symbol.for`创建的属性的`key`字,就是你传进去的那个字符串

```js
  <script>
    const demo1 = Symbol('foo')
    const demo3 = Symbol.for('bar')
    console.log(Symbol.keyFor(demo1))// undefined
    console.log(Symbol.keyFor(demo3)) // bar
```



## 内置的Symbol值

`Symbol`有11个原生的内置值,说的通俗点就是那些大佬们帮你搞了11个`js`内置的`Symbol`变量

### 1.Symbol.hasInstance

判断一个实例属不属于这个类,可以用`instanceof`关键字,当使用`instanceof`操作符时,会调用类中的`Symbol.hasInstance`指向的方法，这里`instanceof`运算符有2种用法

```js
    class Demo {
      static [Symbol.hasInstance](foo) {
        console.log('hello') // hello
      }
    }
    const demo = new Demo()
    console.log(demo instanceof Demo) // false
```

```js
    class Demo {
      [Symbol.hasInstance](foo) {
        console.log('hello') // hello
      }
    }
    const demo = new Demo()
    console.log([1, 2, 3] instanceof demo) // false
```

这个地方我有点没搞明白,没学好,后续再补充。

###  2.Symbol.isConcatSpreadable

这个地方请参考我的另一篇文章[js的concat方法](https://blog.csdn.net/qq_42356513/article/details/122907588)