---
title: 条件查询
date: 2022-04-17
author: 六花
tags:
 - 六花笔记
categories:
 - 六花笔记
---

```
起别名
SELECT a AS A FROM employees;

除去重复
SELECT DISTINCT id  FROM employees;

字符连接
SELECT 
	CONCAT('a','b','c')
FROM 
	employees;

显示结构
DESC employees;

更换NULL
IFNULL(commission,0);

条件运算符
SELECT A FROM B WHERE ____;

逻辑运算符
&&和and  || 或or   ! 或者not

模糊查询
LIKE关键字

SELECT * 
FROM 
		employees 
WHERE
		last_name LIKE '__e_a%';
查询员工名中第二个字符为_的员工名字：LIKE '_\_%'
'\'起到转译的作用，也可以定义转义符：LIKE '_A_%' ESCAPE 'A'

BETWEEN AND关键字
id BETWEEN 120 AND 100

IN关键字（查有）
id IN ('IT_PROT','AD_VP','AD_PRES')

IS NULL关键字（查没有）
pct IS NULL

安全等于：<=> 不等于:<>
判断是否等于，如果等于返回ture

is null 与 <=>
IS NULL:仅仅可以判断NULL值，可读性高
<=>    :既可以判断NULL值，又可以判断普通的数值，可读性较低
```

希望这波疫情早点过去，五一希望能回家。





