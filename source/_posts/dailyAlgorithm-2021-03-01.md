---
title: 算法每日一题 —— 2021-03-01
categories:   # 这里写的分类会自动汇集到 categories 页面上，分类可以多级
 - 个人学习笔记
 - 算法每日一题
 - javascript
 - 算法
date: 2021-03-01 15:31:45
tags:
- 学习笔记
- 算法每日一题
- javascript
- 算法
header_image: /intro/algorithm.jpg
---
# 算法每日一题

## Day5：区域和检索 - 数组不可变

给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

实现 NumArray 类：

NumArray(int[] nums) 使用数组 nums 初始化对象
int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
 

示例1：
```
输入：
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
输出：
[null, 1, -1, -3]

解释：
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
```


提示：

* 0 <= nums.length <= 104
* -105 <= nums[i] <= 105
* 0 <= i <= j < nums.length
* 最多调用 104 次 sumRange 方法


## 解答

思路：

  * 首先创建一个比原数组长度长1的空数组，用来存放原数组从0到第N位的前缀和。
  * 循环原数组，计算保存每一项的前缀和。
  * sumRange方法中是需要计算第j+1位的前缀和减去第i位的前缀和，差值为第i位到第j位的和


代码：
```javascript
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let sum = new Array(nums.length + 1).fill(0)
    sum[0] = 0
    for(let i = 0; i < nums.length; i++) {
        sum[i + 1] = sum[i] + nums[i]
    }
    this.sum = sum
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j + 1] - this.sum[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```