---
title: 条件查询
date: 2022-04-14
author: 六花
tags:
 - 六花笔记
categories:
 - 六花笔记
---



```
条件运算符

SELECT  
		last_name  
FROM  	
		employees  WHERE  id<>90;

逻辑运算符

&&和and  || 或or   ! 或者not

SELECT 		 
		last_name  
FROM  		
		employees  
WHERE  
		NOT (id>=90  AND  id<=110) OR salary>15000;


模糊查询

like关键字

查询员工名中包含字符a的员工信息

SELECT * 
FROM 
		employees 
WHERE
		last_name LIKE '%a%';

查询员工名中第三个字符为e，第五个字符为a的员工名和工资
SELECT 
		last_name,salary 
FROM 
		employees 
WHERE  
		last_name LIKE '__e_a%' ;

查询员工名中第二个字符为_的员工名字
SELECT
		last_name
FROM
		employees
WHERE
		last_name LIKE '_\_%';

\起到转译的作用，也可以定义转义符

SELECT
		last_name
FROM
		employees
WHERE
		last_name LIKE '_A_%' ESCAPE 'A';



BETWEEN AND关键字
SELECT  *
FROM
		employees
WHERE
		id BETWEEN 120 AND 100;

IN关键字
SELECT 
		last_name,
		job_id
FROM
		employees
WHERE 
		id IN ('IT_PROT','AD_VP','AD_PRES');

IS NULL关键字
SELECT 
		last_name,
		pct
FROM
		employees
WHERE 
		pct IS NULL;
```

跟领导谈了谈话，指明了未来的工作方向，首先科技岗不能急，因为技术是慢慢积累起来的，需要不断地积累经验和进步学习，先从数据库学起，后来会一步一步跟着项目走，积累开发测试经验，平时没事自己也需要在手机app这方面多学习，以后肯定是需要用到的。

道阻且长，行则将至。







