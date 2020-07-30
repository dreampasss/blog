---
sidebar: auto
title: Node.js 安装与配置
date: 2020-04-15
tags:
 - Node
categories:
 -  后端
---

::: tip
node 详细安装与配置
:::

<!-- more -->

## Node.js 网址
[传送门](http://nodejs.cn/download/)
安装完成后 cmd 执行以下命令出现版本号则表示安装成功
~~~ sh
node -v  
npm -v
~~~ 
## 配置
### 指定缓存路径
node 通过 npm 安装的模块默认存放在C盘，如果不想占用C盘的空间，我们可以设置缓存路径
1. 新建目录<code>D:\node_cache</code>
2. 在该目录下创建<code>node_cache</code>和<code>node_global</code>两个文件夹
3. 设置缓存路径
~~~ sh
npm config set cache "D:\node_cache\node_cache"
npm config set prefix "D:\node_cache\node_global"
~~~
### 添加环境变量
自定义缓存路径要配置环境变量，不然使用全局安装的模块的时候系统将会无法识别。将上一步的缓存路径<code>D:\node_cache\node_global</code>添加至系统变量 path 中
### cnpm
cmd 安装后执行 cnpm -v 出现版本号则配置成功
~~~ sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
~~~


