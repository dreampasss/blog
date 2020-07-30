---
sidebar: auto
title: Node环境运行vue项目
date: 2020-04-17
tags:
 - Node
---
## 初始化项目

- 将vue打包后的dist文件粘贴至自定义文件夹中
- 新建`app.js`文件

## 相关配置
### 添加package.json配置文件
``` js
npm install -y
```
### 引入express服务器
``` js
npm install express -save
```
### 开启gzip压缩
``` js
npm install compression -D
```
### pm2管理项目
``` js
npm install pm2  -g
```
- 启动项目：pm2 start 脚本 --name 自定义名称
- 查看运行项目：pm2 ls
- 重启项目：pm2 restart 自定义名称
- 停止项目：pm2 stop 自定义名称
- 删除项目：pm2 delete 自定义名称
### app.js配置
``` js
// 引入模块
const express = require('express')
const compression = require('compression')
// 创建 web 服务器
const app = express()
// 安装
app.use(compression())
app.use(express.static('./dist'))
//开启 http 服务
app.listen(80,()=>{
  console.log('server runing at localhost')
})
```

