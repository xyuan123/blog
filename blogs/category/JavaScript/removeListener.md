---
title: removeListener移除事件报错
date: 2022-02-22
tags:
 - js
categories:
 - JavaScript
---
## 问题描述

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <button class="remove">移除事件</button>
  <script>
    window.addEventListener('load', () => {
      window.addEventListener('resize', () => {
        console.log('window-resize')
      })
      const removeBtn = document.querySelector('.remove')
      removeBtn.onclick = () => {
        window.removeEventListener('resize')
      }
    })
  </script>
</body>

</html>
```



点击按钮,移除监听屏幕大小事件,报错

`Uncaught TypeError: Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only 1 present`

## 解决方案

把你的回调函数用函数声明的方式去写,然后在移除监听事件的时候把回调函数传进去

```js
  <script>
    window.addEventListener('load', () => {
      function foo() {
        console.log('window-resize')
      }
      window.addEventListener('resize', foo)

      const removeBtn = document.querySelector('.remove')
      removeBtn.onclick = () => {
        window.removeEventListener('resize', foo)
      }
    })
  </script>
```

