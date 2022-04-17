---
title: 条件查询
date: 2022-04-16
author: 六花
tags:
 - 六花笔记
categories:
 - 六花笔记
---

```
# 安全等于 <=>

判断是否等于，如果等于返回ture

查询工资为12000的员工信息
SELECT
		last_name,
		salary
FROM 
		employees
WHERE
		salary <=> 12000;

# is null 与 <=>
IS NULL:仅仅可以判断NULL值，可读性高
<=>    :既可以判断NULL值，又可以判断普通的数值，可读性较低

查询没有奖金且工资小于18000的salary,last_name
SELECT salary,last_name
FROM employees
WHERE pct is null AND salary < 18000;

查询emloyees表中，id不为‘IT’或者工资为12000的员工信息
SELECT * 
FROM employees
WHERE id <> 'IT' or salary = 12000;

查询部门departments 表中涉及到了哪些编号
SELECT distinct location_id
FROM departments;

SELECT * FROM employees;
SELECT * FROM employees where pct like '%%' and last_name like '%%';
是否一样

如果判断的字有null值，就不一样

SELECT * FROM employees;
SELECT * FROM employees where pct like '%%' or last_name like '%%' or id like '%%';
是否一样

一样，因为肯定有不为null的内容
```

每周末出个总结吧，不然前面的笔记后面忘，今天就有点忘了前几天的东西了。



最近疫情不乐观，回家都不能回，电脑手办都在家里放着搬不到出租屋里面来，上班还要48小时核酸才能进公司。





