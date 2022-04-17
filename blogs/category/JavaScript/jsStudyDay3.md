---
title: 恶补js基础第三轮
date: 2022-03-11
tags:
 - js
categories:
 - JavaScript
---
## 构造函数

自从学了类之后,发现类是真的香

* 构造函数记得首字母大写

### new关键字的作用

`new`一个构造函数,主要做了一下几件事情

* 1.首先创建了一个空对象
* 2.将空对象的原型指向构造函数的`prototype`
* 3.将这个空对象赋给构造函数内部的关键字`this`
* 4执行了构造函数内部的方法

### new.target

如果用`new`一个构造函数`new.target`指向这个构造函数,不然`new.target`指向`undefined`

```js
 function Demo() {
      console.log(new.target) // undefined
    }
    Demo()
// 
 function Demo() {
      console.log(new.target) // Demo函数本身
    }
    new Demo()
```



## Object对象的相关方法

### 1.Object.getPrototypeOf

作用: 获得一个对象的原型

示例

```js
    class Demo {
      constructor(name) {
        this.name = name
      }
    }
    const demo = new Demo('夏鸣予')
    console.log(Object.getPrototypeOf(demo) === Demo.prototype) //  true
```

### 2.Object.setPrototypeOf

作用:为一个对象设置原型

```js
  const parentObj = {
      a: 1
    }
    const childObj = {
      b: 1
    }
    Object.setPrototypeOf(childObj, parentObj) // childObj的原型指向了b
    console.log(childObj)
```

