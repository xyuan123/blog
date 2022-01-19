---
title: git常用命令
date: 2022-01-14
tags:
 - git
categories:
 - Git
sticky: 2
---
::: tip 

这是一篇关于git常用命令的文档o(￣▽￣)ｄ

:::



<!-- more -->

### 添加暂存区

```
git add .
```

### 提交本地仓库

```
git commit -m '该次提交的一些提示信息'
```

### 关联远程仓库

```
// 注意这个origin只是你的远程仓库别名,你也可以取其他的名字,不过一般都是用origin
git remote add origin '远程仓库名字' 
```

### 推送到远程仓库,第一次推送要写远程分支的名字,推送成功后,后面直接git push就行了

```
git push origin master
```

### 查看远程仓库地址

```
git remote -v
```

### 撤销git add .

```
git reset head
```

### git 移除

```
git remote rm 远程仓库名(一般是origin)
```

### git 创建分支

```
// 第一次创建新的分支要加-b,比如你现在写一个登录页,那么你可以这样
git checkout -b login
// 这样相当于新建了一个login分支,并切换到了login分支
第二次直接 git checkout login就行了
```

### git 查看当前分支

```
git branch
```

### git 查看历史提交记录

```
// 注意输入git log 后,退出当前终端,输入wq就行了,这是linux命令,不然你输别的东西退不出终端的
git log

```

### git 克隆项目

```
// 这里克隆项目一般都用ssh地址,克隆ssh地址报错,排查一段时间后还是解决不了,就用https地址
git clone 远程仓库地址
```

### git 回到指定版本

1.先git log 查看历史记录

<img src="../../../.vuepress/public/git/git_log.png" alt="加载失败" style="zoom: 70%;float:none" align="left"/>

2.根据你曾经的commit -m ‘你的提交信息去’ 回退版本

比如我现在要回退到**细小改动**这个版本

命令行输入

```
// 你输入git log 后 退出命令行要在输入wq
// 然后--hard后面接的是你的版本号 也就是黄色的commmit那一行,输入前5位就可以了
git reset --hard 785fd  
```

3.输入回退命令后可以看到相关提示信息

<img src="../../../.vuepress/public/git/git_reset.png" alt="加载失败" style="zoom: 100%;float:none" align="left"/>

### 下班之前你需要做的事情

```
git add .
git commit -m '搞定了'
git push 
下班
```



## 结束语

git命令输完后,没有消息就是好消息(～￣▽￣)～

## 鸡汤时刻

江畔何人初见月,江月何年初照人。
