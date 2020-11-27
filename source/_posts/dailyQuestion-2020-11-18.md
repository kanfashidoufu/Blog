---
title: 每日一问 —— 2020-11-18
categories:   # 这里写的分类会自动汇集到 categories 页面上，分类可以多级
 - 个人学习笔记
 - 每日一问
 - 浏览器
date: 2020-11-18 16:38:58
tags:
- 学习笔记
- 每日一问
- 浏览器
header_image: /intro/daliyQuestion.png
---
# 每天一个知识点

## Day1：请写出下面代码执行的结果

```javascript
console.log(1);
setTimeout(() => {
  console.log(2);
  new Promise((resolve) => {
    console.log(3);
    resolve();
  }).then(() => {
    console.log(4);
  });
});
new Promise((resolve) => {
  console.log(5);
  resolve();
}).then(() => {
  console.log(6);
});
```

## 答案

```javascript
// 浏览器依次输出
1
5
6
2
3
4
```

## 解析

### 宏任务和微任务
* 宏任务：macrotask,包括setTimeout、setInerVal、setImmediate(node独有)、requestAnimationFrame(浏览器独有)、I/O、UI rendering(浏览器独有)
* 微任务：microtask,包括process.nextTick(Node独有)、Promise.then()、Object.observe、MutationObserver 
* Promise构造函数中的代码是同步执行的，new Promise()构造函数中的代码是同步代码，并不是微任务

### 流程总结
1. 一开始整段脚本作为第一个宏任务执行
2. 执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
3. 当前宏任务执行完出队，检查微任务队列，如果有则依次执行，直到微任务队列为空
4. 执行浏览器 UI 线程的渲染工作
5. 检查是否有Web worker任务，有则执行
6. 执行队首新的宏任务，回到2，依此循环，直到宏任务和微任务队列都为空