---
sidebar: auto
title: CSS样式定义的优先级顺序
date: 2020-04-17
categories:
 - 前端
tags:
 - CSS
---

## 样式声明顺序
内联样式 > 嵌入样式 > 外部样式(导入样式)

## link和@import引入的区别
- link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS
- link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载
- link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持
- ink支持使用Javascript控制DOM去改变样式；而@import不支持    