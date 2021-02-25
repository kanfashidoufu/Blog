---
title: 算法每日一题 —— 2021-02-23
categories:   # 这里写的分类会自动汇集到 categories 页面上，分类可以多级
 - 个人学习笔记
 - 算法每日一题
 - javascript
 - 算法
date: 2021-02-23 10:40:03
tags:
- 学习笔记
- 算法每日一题
- javascript
- 算法
header_image: /intro/algorithm.jpg
---
# 算法每日一题

## Day2：爱生气的书店老板

今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分钟结束后离开。

在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一分钟的顾客就会不满意，不生气则他们是满意的。

书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。

请你返回这一天营业下来，最多有多少客户能够感到满意的数量。

示例1：
```
输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
输出：16
解释：
书店老板在最后 3 分钟保持冷静。
感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.
```

提示：

* 1 <= X <= customers.length == grumpy.length <= 20000
* 0 <= customers[i] <= 1000
* 0 <= grumpy[i] <= 1

## 解答

思路：

  * 先计算出所有老板不生气时的顾客数量。
  * 本质上是利用滑动窗口来计算一个最大值，计算从第一个窗口到最后一个窗口间，长度为X的窗口内老板生气时影响顾客数量最多的一个窗口值。
  * 窗口值再加上老板不生气时的顾客数量得刀一天内最多有多少客户能够感到满意的数量。


代码：
```javascript
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
let maxSatisfied = function(customers, grumpy, X) {
    // 计算出老板不生气时的顾客总量
    let total = 0
    let time = customers.length
    for(let i = 0; i < time; i++>) {
        if(grumpy[i] === 0) {
            total += customers[i]
        }
    }
    // 第一个滑动窗口值
    let increase = 0
    for(let j = 0; j < X; j++) {
        increase += customers[i] * grumpy[i]
    }
    // 遍历每个滑动窗口，取得最大值
    let maxIncrease = increase
    for (let k = X; k < time; k++) {
        increase = increase - customers[k-X] * grumpy[k-X] + customers[k] * grumpy[k]
        maxIncrease = Math.max(maxIncrease, increase)
    }
    return total + maxIncrease
};
```