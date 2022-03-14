---
title: template标签结合v-if,v-else不影响相关样式
date: 2022-03-11
tags:
 - Vue
categories:
 - Vue
---
## 问题描述

有时候存在这种情况,`h2`和`span`标签与第二个`h2`标签不想同时显示,也就是111,222显示,333就不显示,333显示,111,222就不显示。这时候就会用到`v-if,v-else`,然后给`h2，span`外面包裹一个div，但是这样做样式可能就会乱掉,可以考虑用`template`节点去包裹,`template`标签不会生成额外节点,并且样式也不会乱掉

```#html
      <div class="demo">
            <h2>111</h2>
            <span>222</span>
            <h2>333</h2>
        </div>
```

## 解决方案

```html
        <div class="demo">
          <template v-if="你的变量">
            <h2>111</h2>
            <span>222</span>
          </template>
          <template v-else>
            <h2>333</h2>
          </template>
        </div>
```

