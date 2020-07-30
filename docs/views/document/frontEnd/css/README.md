---
title:
date: 2020-04-17
---

## 引入方式
### 外部样式
使用 `link` 标签引入外部样式文件要放在 `head`标签中
~~~ html
<link rel="stylesheet" href="common.css" type="text/css">
~~~
### 嵌入样式
在`html`文件中使用`style`标签
~~~ html
<style>
	body {
		background: aqua;
	}
</style>
~~~
### 内联样式
在标签中使用
~~~ html
<div style="background: aqua;">summertrain.club</div>
~~~
### 导入样式
通过`@import`来导入外部样式文件，可以在`style`标签和其他外部样式文件中使用
~~~ html
<style>
	@import url("test.css");
	body {
		background: aqua;
	}
</style>
~~~