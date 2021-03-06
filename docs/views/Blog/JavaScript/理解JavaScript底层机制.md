---
sticky: 1
title: 理解JavaScript运行机制和原理
sidebar: auto
date: 2020-05-08
tags:
 - JavaScript
categories:
 -  前端
---

&emsp;&emsp;早期 `JavaScript` 作为浏览器脚本语言，设计之初是让网页与用户更好的交互， `JavaScript`在没有 node 之前一直跑在浏览器端。了解了`JavaScript`的运行原理才能写出更优美的代码，提高运行效率，还能解决开发中遇到的不理解的问题。 

## 进程与线程

&emsp;&emsp;进程是cpu资源分配的最小单位，进程可以包含多个线程。 浏览器就是多进程的，每打开的一个浏览器窗口就是一个进程。 而线程是cpu调度的最小单位，同一个进程下各个线程之间共享程序的内存空间。我们可以把进程看做成一个仓库，线程就好比为每个仓库运货的车，多辆车可以同时为仓库运货，但是每辆车同一时间只能做一件事，就是运输本次的货物。

## 渲染进程

浏览器包括4个进程：

1. 主进程（Browser进程），浏览器只有一个主进程，负责资源下载，界面展示等主要基础功能
2. GPU 进程，负责 3D 图示绘制
3. 第三方插件进程，负责第三方插件处理
4. 渲染进程（Renderer进程），负责 JavaScript 执行，页面渲染等功能

 渲染进程主要包括 GUI 渲染线程、JavaScript 引擎线程、事件循环线程、定时器线程、HTML 异步线程。

## GUI渲染线程

浏览器渲染网页：

1. 首先浏览器会解析 HTML 代码（实际上 HTML  代码本质是字符串）转化为浏览器认识的节点，生成 DOM树，也就是 DOM Tree
2. 然后解析 css，生成 CSSOM（CSS规则树）
3. 把 DOM Tree 和 CSSO M结合，生成 Rendering Tree(渲染树)  

&emsp;&emsp;GUI主要就是负责这块， 如果修改了一些元素的颜色或者背景色，页面就会重绘（Repaint），如果修改元素的尺寸，页面就会回流（Reflow）。Reflow 的成本比 Repaint 更高。

## JavaScript引擎线程

&emsp;&emsp;JavaScript 引擎线程就是 JavaScript 内核，负责解析与执行 JavaScript 代码，也称为主线程。浏览器同时只能有一个JavaScript 引擎线程在运行 JavaScript 程序，所以 JavaScript 是单线程运行的。 而且，JavaScript 引擎线程和GUI 渲染线程同时只能有一个工作，如果 JavaScript 引擎线程执行时间太久或异常，则会阻塞 GUI 渲染线程。

## 单线程与多线程

计算机中的单线程和多线程

- 单线程：同一时间中，所有的线程必须排队进行，当某一个进程可能计算量过大 CPU 忙不过来，或者是因为 I/O 设备很慢，此时不做处理就得一直等待，严重可能会导致程序崩溃。简单来说**单线程必须前一个线程执行完成，后一个才可以进行**，类似于数据结构中的队列。
- 多线程：同一时间中，所有的线程可以同时进行。在多线程程序中，如果某一个程序处于等待的情况下，CPU 也可以执行其他的线程而不是等待。

生活中的 ”单线程“ 和 ”多线程“

- 单线程：你正准备喝水，又想给朋友打电话，此时你可以喝完水在和朋友打电话。
- 多线程：你正准备喝水，又想给朋友打电话，此时你可以一边喝水一遍和朋友打电话。

对比：

&emsp;&emsp;某些情况下，多线程和单线程最终的结果和目的都是一样的。只是在执行效率不同。

## JavaScript引擎执行过程

1. 语法分析阶段：对加载完成的代码进行语法检验，检验完成后进入预编译阶段；

2. 预编译阶段：搜集函数名以及变量提升，确定this指向和作用域链

3. 执行阶段：通过事件循环执行

## 执行栈和任务队列

&emsp;&emsp;读到这里我们知道了 JavaScript 是单线程的，而且是运行在浏览器中。往往在程序中，某些进程可能要花费更多的时间，而此时用户完全不必去等待。 JavaScript语言的设计者意识到，这时主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后边的任务，等到IO设备返回了结果，再回过头把挂起的任务继续执行下去。 

&emsp;&emsp;于是在 JavaScript 所有的任务中，可以分为同步任务 （synchronous） 和 异步任务(asynchronous) 。在 JavaScript 引擎执行时会进行判断，同步任务会进入主线程（执行栈），异步任务则进入任务队列中（ Event queue ）。当主线程中的同步任务执行完毕，再来执行事件队列中的异步任务。

``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0);
console.log(3)

// 输出：1 3 2
```

常见异步任务：

1. setTimeout和setInterval
2. DOM事件
3. AJAX
4. Promise

##  事件循环（event loop）

&emsp;&emsp;事件循环就是 JavaScript 引擎不断执行栈和任务队列。不过在任务队列中又划分为宏任务和微任务。
![An image](/assets/JavaScript/eventLoop.png)
<!-- <img :src="$withBase('/assets/JavaScript/eventLoop.png')" alt="foo"> -->


## 内存机制