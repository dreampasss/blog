---
title: 模拟实现vue的双向绑定
date: 2020-04-20
categories:
  - 前端
tags:
  - Vue
---

通过代理实现

```js
<body>
	<input type="text" v-model="content">
	<hr>
	<input type="text" v-model="title">
	<input type="text" v-model="title">
	<h4 v-bind="title">数据更新</h4>
</body>
<script>
	function View() {
		let proxy = new Proxy({}, {
			set(obj, property, value) {
				// console.log(value);
				document.querySelectorAll(`[v-model=${property}]`)
                    .forEach(item => item.value = value);
				document.querySelectorAll(`[v-bind=${property}]`)
                    .forEach(item => item.innerHTML = value);
			},
			get(obj, property) {}
		})
		this.init = function () {
			const els = document.querySelectorAll("[v-model]");
			els.forEach((item) => {
				item.addEventListener("keyup", function () {
					console.log(this.getAttribute("v-model"))
					proxy[this.getAttribute("v-model")] = this.value;
				})
			})
		}
	}
	new View().init()
</script>
```
