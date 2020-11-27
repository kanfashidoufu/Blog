---
title: 每日一问 —— 2020-11-27
categories:   # 这里写的分类会自动汇集到 categories 页面上，分类可以多级
 - 个人学习笔记
 - 每日一问
 - javascript
date: 2020-11-27 15:26:58
tags:
- 学习笔记
- 每日一问
- javascript
header_image: /intro/daliyQuestion.png
---
# 每天一个知识点

## Day2：请写出下面代码执行的结果

```javascript
function side(arr) {
  arr[0] = arr[2];
}
function a(a, b, c = 3) {
  c = 10;
  side(arguments);
  return a + b + c;
}
a(1, 1, 1);
```

## 答案

```javascript
// 浏览器输出
12
```

## 解析

参数默认值表示使用ES6语法，ES6则默认使用严格模式，arguments实际上是参数的浅拷贝，不会受其他变量赋值的影响，所以最后结果是12