---
title: css实现一行文字居中,多行文字左对齐
date: 2022-03-01
tags:
 - css
categories:
 - Css
---
## 思路

一个`div`里面搞个`span`,`div`给`text-align: center`，`span`设置成行内块级元素,并给`text-align: left`

## 示例

如果换不了行,记得加个`  word-break: break-all;`样式

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .demo {
        width: 100px;
        text-align: center;
        word-break: break-all;
    }

    .demo span {
        display: inline-block;
        text-align: left;
    }
</style>

<body>
    <div class="demo">
        <span>111111111111111111111111111111111111111111111111111111111111111111123yyy</span>
    </div>
    <script>

    </script>
</body>

</html>
```

