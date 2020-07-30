---
title: VsCode自定义模板
date: 2020-04-17
tags:
 - VsCode
---
## 定义HTML模板
- 文件 ——> 首选项 ——> 用户代码片段  
- 搜索html，在html.json添加，以下是配置 vue 的代码片带
~~~ json
  "Html5-Vue": {
    "prefix": "vue",//可以自己修改成想要的名字
    "body": [
        "<!DOCTYPE html>",
        "<html lang=\"en\">\n",
        "<head>",
        "\t<meta charset=\"UTF-8\">",
        "\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">",
        "\t<title>Document</title>",
        "\t<script src=\"../js/vue.js\"></script>",//改成自己的vue路径
        "</head>\n",
        "<body>",
        "\t<div id=\"app\">",
        "\t",
        "\t</div>\n",
        "\t<script>",
        "\t\tvar vm = new Vue({",
        "\t\t\tel: '#app',",
        "\t\t\tdata: {",
        "\t\t\t\t$1",
        "\t\t\t},",
        "\t\t\tmethods: {}",
        "\t\t});",
        "\t</script>",
        "</body>\n",
        "</html>"
    ],
    "description": "自定义vue模板"
}
~~~

## 定义全局代码片段
- 文件 ——> 首选项 ——> 用户代码片段  
- 选择 "新建代码片段文件"，设置同上