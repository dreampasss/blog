---
title: tg后台前端网站实现过程中解锁的新插件
date: 2020-06-17
sidebar: auto
categories:
  - 前端
tags:
  - Vue
---

## 前言

&emsp;&emsp;最近在做公司推广后台的前端网站，已经快接近尾声了，在此期间遇到了很多好用的方法和解决方案，下面就来做一次记录和总结。

## 问题与解决方案
### 1.导出csv文件
&emsp;&emsp;通过axios发送的请求返回的是文件流，所以得处理才可以正常的实现这个功能。因为很多页面都需要导出csv表格，所以直接在Vue原型上注册方法，在需要用的页面直接this出来即可。
``` js
// 封装的axios中间层添加返回类型字段
Vue.prototype.exportOverviewData = () => {
  return request({
    url: '/data/index/export?page=1',
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded' //请求的数据类型为form data格式
    },
    responseType: 'blob' //设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
  });
};

// 导出csv
Vue.prototype.exportCsvFile = data => {
  const blob = new Blob([data]);
  const fileName = 'xxx.csv';  // 文件名
  const linkNode = document.createElement('a');
  linkNode.download = fileName; //a标签的download属性规定下载文件的名称
  linkNode.style.display = 'none';
  linkNode.href = URL.createObjectURL(blob); //生成一个Blob URL
  document.body.appendChild(linkNode);
  linkNode.click(); //模拟在按钮上的一次鼠标单击
  URL.revokeObjectURL(linkNode.href); // 释放URL 对象
  document.body.removeChild(linkNode);
}
```

### 2.图形验证码
&emsp;&emsp;这个项目在修改密码的请求返回的也是文件流的形式，也不能正常的使用。
``` js
// 请求获取图片验证码接口
Vue.prototype.getImageVerifyCode = () => {
  return request({
    url: '/captcha/new',
    method: 'get',
    responseType: 'arraybuffer',
    codeImg: true
  });
};

// 获取图片验证码
methods: {
  _getImageVerifyCode() {
    this.getImageVerifyCode().then(res => {
      this.imgUrl = 'data:image/png;base64,' + btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    });
  }
}
```

### 3.复制链接到剪切板
&emsp;&emsp;这个功能之前在做H5网站的时候用到过，是使用原生的方式实现的。这次本来也想通过原生实现，但是具体代码有些忘记了，最终发现了这个专门做复制到剪切板的插件。它不依赖任何类库，非常的轻量，并且使用起来也很简单。
``` js
// 安装
npm install clipboard --save

//使用
/**
 * 参数说明
 * @dom: 触发复制操作的 Dom 元素，这里传入的是 className 或者 Id
 * @content: 复制到剪切板的内容
 */
import ClipboardJS from 'clipboard';
Vue.prototype.clipboardJs = (dom, content) => {
  var clipboard = new ClipboardJS(dom, {
    text: () => content
  });
  clipboard.on('success', e => {
    Vue.prototype.$message.success('复制成功');
    // 释放内存
    clipboard.destroy();
  });
  clipboard.on('error', e => {
    // 不支持复制
    Vue.prototype.$message.error('当前浏览器不支持复制操作');
    // 释放内存
    clipboard.destroy();
  });
};
```
### 4.支付宝支付
&emsp;&emsp;axios请求到的接口是一串form表单的标签，所以我们可以这么来做。
``` js
Vue.prototype.emitAliPay = tagData => {
  const div = document.createElement('div'); // 创建div
  div.className = 'from';
  div.innerHTML = tagData; // 将返回的form 放入div
  document.body.appendChild(div);
  document.querySelector('.from form').submit(); // 出发submit事件
}
```

### 5.微信支付
&emsp;&emsp;微信支付请求到的是一个微信的支付链接，直接通过浏览器返回是请求不到什么的。这里可以生成二维码来完成支付。所以会用到一个将链接转化成二维码的插件。
``` js
// 安装
npm install qrcodejs2 --save

// html
<div id="qrcode" ref="qrcode"></div>

// 使用
import QRCode from 'qrcodejs2';
methods: {
  handleWxpay(parmas){
    this.wxpay(parmas).then(res => {
       if (res.data.data.token) {
          this.wechatDialog = true;  // 显示微信支付 Dialog
          this.$nextTick(function() {
            this.$refs.qrcode.innerHTML = '';  
            let qrcode = new QRCode('qrcode', {
              text: res.data.data.token
          });
        });
      }
    })
  }
}
```
## 总结
&emsp;&emsp;这些功能由于之前没有遇到过，起初解决起来没有什么头绪，但是Vue的社区很活跃，所以相关的功能都可以在网上找到类似的解决方案，通过自己的二次封装，以后在遇到相似的问题就可以直接拿来使用了。

