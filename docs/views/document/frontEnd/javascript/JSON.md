---
title: JSON
---

## 基本用法

~~~ js
JSON.stringify()  // 对象转JSON字符串
JSON.parse()      // JSON字符串转对象
~~~
## toJSON 方法
对象中函数 `toJSON` 可以自定义 `JSON` 内容
```js
let user = {
  count: 1,
  profile: {
    name: 'summer',
    age: 22
  },
  toJSON() {
    return {
      count: this.count,
      profile: this.profile
    };
  }
};

console.log(JSON.stringify(user, null, 2));
```
