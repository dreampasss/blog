---
title: Math数学计算
---

## 极值

~~~ js
Math.min(3,5,8,4,22,6,8,21)  //3
Math.max(3,5,8,4,22,6,8,21)  //22
~~~
## 小数取整
~~~ js
const num = 4.5
Math.floor(num) //向下取整  4
Math.ceil(num) //向上取整  5
Math.round(num) //四舍五入  5
num.toFixed() //四舍五入  
~~~
## 随机数
~~~ js
Math.random() // >= 0 < 9

//随机获取 0 - 9
console.log((Math.floor(Math.random() * 10)))
~~~