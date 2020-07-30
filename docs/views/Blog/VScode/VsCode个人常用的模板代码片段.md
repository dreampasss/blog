---
title: VsCode个人常用的模板代码片段
date: 2020-06-18
tags:
 - VsCode
---

## 自定义代码片段
&emsp;&emsp;记录一下自己在工作中经常用到的快捷输入，用户代码片段中新建`--global`json配置文件。
``` json
  "快速打印log": {
    "prefix": "cl", //可以自己修改成想要的名字
    "body": [
      "console.log($1)"
    ],
    "description": "$console.log()"
  },
  // }
  "快速打印table": {
    "prefix": "ct", //可以自己修改成想要的名字
    "body": [
      "console.table($1)"
    ],
    "description": "$console.table()"
  },
  // *************--------- 网络请求 ---------*************
  "js长注释": {
    "prefix": "jsannotation", //可以自己修改成想要的名字
    "body": [
      "// *************--------- $1 ---------*************"
    ],
    "description": "快捷生成js长注释"
  },
  "html长注释": {
    "prefix": "htmlannotation", //可以自己修改成想要的名字
    "body": [
      "<!-- *************--------- $1 ---------************* -->"
    ],
    "description": "快捷生成html长注释"
  },
  "less template": {
    "prefix": "less", //可以自己修改成想要的名字
    "body": [
      "<style lang='less' scoped>",
      "$1",
      "</style>"
    ],
    "description": "快捷生成less模板"
  },
  "emsp*2": {
    "prefix": "emsp*2", //可以自己修改成想要的名字
    "body": [
      "&emsp;&emsp;"
    ],
    "description": "首行缩进2个字符"
  },
  ```