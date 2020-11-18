---
title: 每日一问（一）
categories:   # 这里写的分类会自动汇集到 categories 页面上，分类可以多级
 - 个人学习笔记
 - 每日一问
date: 2020-11-18 16:38:58
tags:
- 学习笔记
- 每日一问
header_image: /intro/daliyQuestion.png
---
# 每天一个知识点

## Day1：请写出下面代码执行的结果

```javascript
console.log(1);
setTimeout(() => {
  console.log(2);
  process.nextTick(() => {
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
});
new Promise((resolve) => {
  console.log(7);
  resolve();
}).then(() => {
  console.log(8);
});
process.nextTick(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(9);
  process.nextTick(() => {
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11);
    resolve();
  }).then(() => {
    console.log(12);
  });
});
```