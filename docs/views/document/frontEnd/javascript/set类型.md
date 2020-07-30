---
title: Set
---

## set 对象类型介绍

ES6提供了新的数据结构Set，Set对象不是数组， 可以用来保存对象或者基本类型， 所有保存的值都是唯一的，不存在重复元素

## 创建 set 实例
~~~ js
const set = new Set([1,3,4,2,1,2,3,4,1])  // Set { 1, 3, 4, 2 }
~~~

## set 常用方法
~~~ js
// 数组
const set = new Set([1,3,4,2,1,2,3,4,1])
set.size         // 返回 set 长度
set.add(9)       // 添加元素
set.delete(2)		 // 删除元素，成功返回 true, 失败返回 false
set.has(2) 			 // 判断元素是否存在，成功返回 true, 失败返回 false
set.clear()			 // 清空 set 对象
set.values()		 // 查看 set 对象中的值
set.keys()		 // 查看 set 对象中的值

// 字符串 
const set = new Set("summer")  // { 's', 'u', 'm', 'e', 'r' }  类似 [...summer]
~~~

## set 对象转数组
### Array.from()
~~~ js 
const set = new Set([1,3,4,2,1,2,3,4,1])
console.log(Array.from(set))  // [ 1, 3, 4, 2 ]
~~~

### 展开语法
~~~ js 
const set = new Set([1,3,4,2,1,2,3,4,1])
console.log([...set])  // [ 1, 3, 4, 2 ]
~~~

## set 遍历
`forEach` 遍历时，v = i
~~~ js
const set = new Set([1,3,4,2,1,2,3,4,1])
set.forEach((v, i, item) => console.log(v, i, item))
~~~

`forof` 
~~~ js
const set = new Set([1,3,4,2,1,2,3,4,1])
for (const v of set) {
	console.log(v)
}
~~~
## set 交集、并集
~~~ js
let set1 = new Set([1,2,4,6,7,3])
let set2 = new Set([2,3,1,5,9,0,6,22])
// 并集
new Set(Array.from([...set1,...set2]).sort((a,b) => a - b))

// 交集
new Set([...set1].filter(item => set2.has(item)))

// 补集
console.log(new Set([...set1].filter(item => !set2.has(item))))
~~~

## 处理网站关键字
~~~ html
<body>
	<input type="text" name="search">
	<ul></ul>
</body>
<script>
	let obj = {
		data: new Set(),
		keyword(word) {
			this.data.add(word)
		},
		show() {
			let ul = document.querySelector('ul');
			ul.innerHTML = '';
			this.data.forEach(v => ul.innerHTML += `<li>${v}</li>`);
		}
	}
	let input = document.querySelector("[name='search']");
	input.addEventListener('blur',function(){
		obj.keyword(this.value)
		obj.show()
	})
</script>
~~~