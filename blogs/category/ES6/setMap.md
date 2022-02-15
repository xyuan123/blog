## Set

### 简要介绍

`Set`是一种数据结构,注意是一种**数据的结构**,不是**数据类型**,峰哥说是一个构造函数,`es6`已经出类了,所以只要说是构造函数,我的理解就是类。

**Set数据结构里面的元素是不能重复的!!!**

既然是类,我们要是用,那就肯定要搞个**实例**出来。

```js
    const s = new Set()
    // 这样就有了一个Set实例
```

实例化的时候可以接受参数,可以接收一个数组,或具有` iterable` 接口的其他数据结构,关于什么是 **iterable 接口**, 由于知识点太难,这个待补充。

```js
   const s = new Set([1, 2, 3])
   console.log(s) // Set(3) {1, 2, 3}
```

可以看到是个集合

```js
    // 也可以传入字符串
    const s = new Set('abbc')
    console.log(s) // Set(3) {'a', 'b', 'c'}
```

### 有趣的知识

`===`被称为精确相等运算符,在判断2个`NaN`是否相等是,是不等滴

```js
NaN === NaN // false
```

### Set实例的属性与方法

#### 四大操作方法

* add方法添加元素并返回实例本身
* delete方法返回布尔值,删除成功返回true,失败返回false
* has方法返回布尔值,有这个值返回true,没有返回false
* clear方法清空数据,没有返回值

```js
    const s = new Set()
    // add 增
    s.add(1)
    console.log(s) // Set(1) {1}
    // 因为add方法返回的是s实例,所以可以链式调用
    s.add(2).add(2)
    console.log(s) // Set(2) {1, 2}
    //  delete 删
    let isDelete = s.delete(2)
    console.log(isDelete) // true
    isDelete = s.delete(3)
    console.log(isDelete) // false
    // has 查
    let isHas = s.has(1)
    console.log(isHas) // true
    isHas = s.has(4)
    console.log(isHas) // false
    // clear 清空
    s.clear()
    console.log(s) // Set(0) {size: 0}
```

`Array.from`方法可以讲set结构转为真正的数组

```js
    const s = new Set([1, 2, 3, 4, 5, 6, 6])
    console.log(Array.from(s)) //  [1, 2, 3, 4, 5, 6]
```

#### 四大遍历方法

* keys方法,返回键名的遍历器
* values方法,返回键值的遍历器
* entries方法,返回键值对的遍历器
* forEach方法,与数组的forEach方法类似

记得看过这样一句话,实现了`Iterator`接口,都可以用`for of` 遍历,so

```js
    const s = new Set([1, 2, 3, 4, 5])
    // console.log(s.keys()) // SetIterator {1, 2, 3, 4, 5}
    // console.log(s.values()) // SetIterator {1, 2, 3, 4, 5}
    // console.log(s.entries()) // SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5}
    // s.forEach((val, index) => {
    //   console.log(val) // 1 2 3 4 5
    //   console.log(index) // 1 2 3 4 5
    // })
```

```js
    const s = new Set([1, 2, 3, 4, 5])
    for (item of s.keys()) {
      console.log(item) // 依次输出1 2 3 4 5
    }
    for (item of s.values()) {
      console.log(item) // 依次输出1 2 3 4 5
    }
    for (item of s.entries()) {
      console.log(item) // 依次输出[1,1] [2,2] [3,3] [4,4] [5,5]
    }    const s = new Set([1, 2, 3, 4, 5])
    for (item of s.keys()) {
      console.log(item) // 依次输出1 2 3 4 5
    }
```

因为set解构键值对是一样的所以keys,values方法返回值一样

##### 遍历应用

求并集,差集,交集

```js
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    // 并集 
    const union = new Set([...a, ...b])  // 1,2,3,4
    console.log(union)
    // 交集
    const interSect = new Set([...a].filter(val => b.has(val))) // 2,3
    console.log(interSect)
    // 差集 a相对于b少了什么
    const difference = new Set([...b].filter(val => !a.has(val)))
    console.log(difference)  // 4
```

有一说一,这学的真无聊啊,不学又不行o(╯□╰)o~~~~

## WeakSet

`WeakSet`跟`Set`数据结构有一下3点区别

* `WeakSet`是弱引用类型
* `WeakSet`只能添加引用类型
* `WeakSet`无法被遍历

### 弱引用

首先说什么是弱引用,这里推荐大家先了解一下[JS的垃圾回收机制](https://segmentfault.com/a/1190000018605776),对弱引用就比较好理解一点,我的理解是,弱引用是不参与垃圾回收机制的应用计数的,用代码解释可能更好一点

```js
    let obj = { a: 2 }
    const s = new WeakSet()
    s.add(obj)
    console.log(s) // 有时候啥也没有,有时候有obj
    obj = null
    function demo() {
      setTimeout(() => {
        console.log(s) // 有时候啥也没有,有时候有obj
      }, 5000)
    }
    demo()
```

这个地方我把网页刷新了好几次,发现有时候有obj的值,有时候没obj的值。推测是由于垃圾回收机制的原因,obj可能存在提前回收或者延迟回收的问题。

## Map

`Map`也是一个类,是一种存储键值对的数据结构,也就是说里面存的数据是key->value这样的形式,但是与对象不同,对象只能的key只能是字符串,这个key啥都行,`undefined`和**函数**也能放

### 四大操作方法

* set方法添加元素并返回实例本身
* delete方法返回布尔值,删除成功返回true,失败返回false
* has方法返回布尔值,有这个值返回true,没有返回false
* clear方法清空数据,没有返回值

```js
    const map = new Map()
    const obj = {}
    // set添加元素
    map.set('foo', 1).set(obj, 2)
    console.log(map) // Map(2) {'foo' => 1, {…} => 2}
    // get取元素
    console.log(map.get('foo')) // 1
    console.log(map.get(obj)) // 2
    // has判断建
    console.log(map.has('bar')) // false
    console.log(map.has('foo')) // true
    // delete 删除 
    console.log(map.delete('bar')) //  false
    console.log(map.delete('foo')) // true
    // clear 清空
    map.clear()
```

要注意添加相同的键,值会覆盖,后者会覆盖前者。

```js
    const map = new Map()
    const obj = {}
    map.set(obj, 2)
    map.set(obj, 1)
    console.log(map) // Map(1) {{…} => 1}
```



### 四大遍历方法

* keys方法,返回键名的遍历器
* values方法,返回键值的遍历器
* entries方法,返回键值对的遍历器
* forEach方法,与数组的forEach方法类似

```js
    const map = new Map()
    const obj = {}
    map.set('foo', 1)
    map.set(obj, 2)
    map.set('bar', 3)
    for (item of map.keys()) {
      console.log(item) // 依次输出 foo, {}, bar
    }
    for (item of map.values()) {
      console.log(item) // 依次输出1 2 3
    }
    for (item of map.entries()) {
      console.log(item) // 依次输出 ['foo', 1]  [{…}, 2] ['bar', 3]
    }
    map.forEach(val => {
      console.log(val) // 1 2 3
    })
```

### 1.map结构转数组

```js
    const map = new Map()
    const obj = {}
    map.set('foo', 1)
    map.set(obj, 2)
    map.set('bar', 3)
    console.log([...map.values()]) // [1,2,3 ]
```

马上就看完了,坚持就是胜利o(╯□╰)o

### 2.数组转map

实例化的时候把二维数组丢进行就可以了

```js
    const map = new Map(
      [
        [a, 1],
        [b, 2]
      ]
    )
```

### 3.map转对象

```js
    function mapToObj(map) {
      const obj = {}
      for (let [key, value] of map) {
        obj[key] = value
      }
      return obj
    }
    const map = new Map()
    const o = {}
    map.set('a', 1).set('b', 2).set(o, 3)
    console.log(mapToObj(map)) // 没有加set(o,3){a: 1, b: 2} || {a: 1, b: 2, [object Object]: 3}
```

### 4.对象转map

```js
    const obj = {
      a: 1,
      b: 2
    }
    console.log(new Map(Object.entries(obj))) // Map(2) {'a' => 1, 'b' => 2}
```

## WeakMap

`WeakMap`跟`Map`类似,但是有两点不同

* `key`必须为对象
* `key`指向的引用为弱引用

在`API`上的不同

`WeakMap`只有4个方法可以用: get,set,has,delete

后续项目遇到再补充

## 博客

欢迎访问我的博客[www.smartxy.cc](http://www.smartxy.cc/)