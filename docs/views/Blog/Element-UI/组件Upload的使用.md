---
title: 组件Upload的使用
date: 2020-06-29
categories:
 - UI库
tags:
 - Element UI
---

&emsp;&emsp;[Upload组件地址](https://element.faas.ele.me/#/zh-CN/component/upload)今天在使用这个组件的时候遇到了一个坑点，在这里记录一下，以免以后再犯。

## 坑点
&emsp;&emsp;这个组件有一个标签属性 `action` 为必选参数，表示上传的地址。于是我直接填入后端该模块的地址，配合组件 `before-upload` 钩子直接出现了跨域请求，无法上传头像。因为是必填项，所以期初一直以为这个组件走接口一定要走这里，之后查了很多的资料发现是可以通过 `http-request` 钩子来自定义请求。

``` html{4}
<el-upload 
  class="avatar-uploader"
  action="#"
  :http-request="httpRequest"
  with-credentials
  :show-file-list="false">
  <img :src="formLabelAlign.avatar" class="avatar" />
  <span>点击更换头像</span>
</el-upload>
```

&emsp;&emsp;通过这个钩子，默认会有一个对象，根据后台接口所需的参数，这里使用到了 FormData 对象，主要是因为：
- 将form表单元素的name与value进行组合，实现表单数据的序列化，从而减少表单元素的拼接，提高工作效率。
- 异步上传文件


``` js
methods: {
  httpRequest(content) {
    let { file } = content; // 获取该文件对象
    var formData = new FormData();
    formData.append('filetype', 'image');
    formData.append('app', 'agent');
    formData.append('file', file);
    formData.append('id', 'UPLOAD_FILE_LOGO');
    formData.append('name', file.name);
    formData.append('type', file.type);
    formData.append('lastModifiedDate', file.lastModifiedDate);
    formData.append('size', file.size);
    // 执行上传文件的方法
    this.uploadAgentLogo(formData).then(res => {
      const resultData = res.data.data;
      if (resultData) {
        this.$message.success('读取成功');
        let { url } = resultData;
        this.formLabelAlign.avatar = url;  // 成功将显示上传后的图片
      } else {
        this.$message(res.data.msg);
      }
    });
  }
}
```



