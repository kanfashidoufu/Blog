---
title: 算法每日一题 —— 2021-02-25
categories:   # 这里写的分类会自动汇集到 categories 页面上，分类可以多级
 - 个人学习笔记
 - 算法每日一题
 - javascript
 - 算法
date: 2021-02-25 14:31:45
tags:
- 学习笔记
- 算法每日一题
- javascript
- 算法
header_image: /intro/algorithm.jpg
---
# 算法每日一题

## Day4：转置矩阵

给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

示例1：
```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
```

示例 2：
```
输入：matrix = [[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
```

提示：

* m == matrix.length
* n == matrix[i].length
* 1 <= m, n <= 1000
* 1 <= m * n <= 105
* -109 <= matrix[i][j] <= 109


## 解答

思路：

  * 首先取matrix[0]得到矩阵列数，然后循环map每一列创建一个新数组。
  * 在列的map中继续map矩阵matrix的行数。
  * 返回一个行index = 列index的数组，转置矩阵完毕


代码：
```javascript
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    return matrix[0].map((item, index) => {
        return matrix.map(row => row[index])
    })
};
```