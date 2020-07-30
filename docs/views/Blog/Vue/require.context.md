---
title: require.context
date: 2020-06-15
sidebar: auto
categories:
  - 前端
tags:
  - Vue
---

## 前言

&emsp;&emsp;今天发现了一个超级无敌好用方法，它就是 require.context。我们知道，在 Vue 组件化开发中，经常会使用 `important` 来导入我们需要的组件，但是有时候一个页面需要的组件非常多，这时候在 script 标签中的导入片段就会非常的多，针对这个现状有没有办法可以实现批量导入呢？答案是有的，require.context 就可以做到。

## requeire.context 是什么？

&emsp;&emsp;它是 webpack 的一个 api，过执行 require.context 函数获取一个特定的上下文,主要用来实现自动化导入模块,在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个 api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用 import 导入模块。

## 使用场景

### 1.全局公共组件

&emsp;&emsp;我们经常会自己定义一些非常好用的公共的组件，通常是放在 components 下的 common 文件夹中，在需要使用的时候就回去 main.js 中一个个的导，这样做会显得代码很冗余，不够优雅。我们可以在 cmomon 文件夹下建一个 exporAll.js。这时候在 main.js 中只需要导入这个文件，执行 `Vue.use()` 来注册一下即可全局使用。

```js
// 1. 获取文件
const requireComponents = require.context(
  "@/components/common", // 查找路径
  true, // 是否查找子目录
  /\.(vue)$/ // 正则匹配vue文件
);
let Components = []; // 创建全局模板对象数组

requireComponents.keys().forEach((fileName) => {
  // 2.获取组件配置(组件模板)
  const componentConfig = requireComponents(fileName);
  // 3.将被注册的组件名字,对获取的组件文件名进行处理
  const componentName = fileName.split("/")[2].replace(/\.\w+$/, "");
  // 4.添加全局模板对象数组
  Components.push({
    name: componentName,
    model: componentConfig,
  });
});
// 5.排除不需要全局注册的数组
const excludesName = ["BottomNavItem"];
excludesName.forEach((fileName) => {
  let index = Components.findIndex((item) => item.name == fileName);
  if (index >= 0) {
    Components.splice(index, 1);
  }
});

export default {
  install(Vue, option) {
    Components.forEach((item) => {
      // 6. 全局注册
      Vue.component(item.name, item.model.default || item.model);
    });
  },
};
```

### 2.私有组件批量注册

&emsp;&emsp;在项目中，有的页面包含很多的子组件，我们通常会在这个页面所在的文件夹另取一个新的文件夹来管理这些私有组件，要使用的时候，通常做法是在父组件一个一个的引入，然后一个一个的在 components 中注册。这样也会很冗余，不够精简。同样的在子组件所在的文件夹中新建 exportAll.js。这里用到了 node 的 path 模块，并且使用它的 basename 方法。这样就省去了用正则来格式化注册的组件名。之后在父组件中导入这个 js 文件，`components:models` 就可以直接使用了。

```js
const path = require("path");
const requireContext = require.context("./", false, /\.vue$/);
let models = {};
requireContext.keys().forEach((item) => {
  const compontentName = strToUpperCase(path.basename(item, ".vue"));
  const compontentmodels = requireContext(item);
  models[compontentName] = compontentmodels.default || compontentmodels;
});
function strToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export default models;
```

### 3.网络请求接口统一注册
```
├─network
|    ├─config.js
|    ├─data.js
|    ├─finance.js
|    ├─game.js
|    ├─home.js
|    ├─index.js
|    └─request.js
```
&emsp;&emsp;在实际的项目中，为了更好的管理不同页面不同的网络请求，我也把对它们用文件来划分，单独管理。上面的request是核心文件，封装了axios。config.js是axios配置需要的请求头等参数信息。之前在我对于页面的请求数据的方法都是直接写一个方法，然后在使用的页面来导入，一旦某个页面网络请求很多的时候，那样也要频繁的导入，非常繁琐。所以比如在home.js中，我直接通过写Vue插件的形式，在Vue原型上直接注册方法。在main.js导入并注册之后就可以在任何组件中通过this来使用该方法。  
&emsp;&emsp;初期个人觉得这个管理很方便，但是随着页面多了，main.js导入也多了，显得很冗余不够优雅。后来在该文件夹下新建index.js，把所有的main.js之前要做的操作都放在index.js中，然后引入到main.js。乍一看main.js网络请求模块精简了很多，但是这也没有实际的解决问题。直接上干货。

```js
import Vue from 'vue'

const path = require('path')
const requireContext = require.context('./',false,/\.(js)$/);
// 排除不需要注册的js文件
const excludeArr = ['index','request','config']
requireContext.keys().forEach(item => {
  const modelsName = path.basename(item,'.js')
  if(!excludeArr.includes(modelsName)){
    let models = requireContext(item).default;
    Vue.use(models)
  }
})
```

### 4.主路由动态导入
&emsp;&emsp;路由的配置通常都是在router文件夹下面的iudex.js，随着项目页面的增多，路由文件的也会变得很大，而且有的页面会涉及到子路由的嵌套，经常会遇到几百行的路由文件，偶尔要修改其中的一条路由的时候会变得非常的繁琐，甚至会看的觉得很烦。所以为了更好的管理路由，我也会根据业务的大小来划分主路由，也就是领取js文件来配置。
``` 
├─router
|   ├─account.route.js
|   ├─data.route.js
|   ├─finance.route.js
|   ├─game.route.js
|   ├─generalize.route.js
|   └index.js
```
&emsp;&emsp;然后还是通过require.context来批量导入。在index.js文件新建`routeList`数组用来存放注入的路由，然后在 `routes` 展开。
```js
const routeList = [];
function getRoutes(h){
  h.keys().forEach(item => {
    routeList.push(h(item).default);
  });
}
getRoutes(require.context('@/router', false, /\.route\.js/))
```



