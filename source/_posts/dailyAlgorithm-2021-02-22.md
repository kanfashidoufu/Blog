---
title: 算法每日一题 —— 2021-02-22
categories:   # 这里写的分类会自动汇集到 categories 页面上，分类可以多级
 - 个人学习笔记
 - 算法每日一题
 - javascript
 - 算法
date: 2021-02-22 10:12:09
tags:
- 学习笔记
- 算法每日一题
- javascript
- 算法
header_image: /intro/algorithm.jpg
---
# 算法每日一题

## Day1：托普利茨矩阵

给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。

示例1：
```
输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
输出：true
解释：
在上述矩阵中, 其对角线为: 
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。 
各条对角线上的所有元素均相同, 因此答案是 True 。
```
示例2：
```
输入：matrix = [[1,2],[2,2]]
输出：false
解释：
对角线 "[1, 2]" 上的元素不同。
```
提示：

* m == matrix.length
* n == matrix[i].length
* 1 <= m, n <= 20
* 0 <= matrix[i][j] <= 99

## 解答

思路：

  * 两角的对角线是单个元素，符合要求，不用遍历。遍历到倒数第二行，遍历到倒数第二列。
  * 如果当前的(i,j)和(i+1,j+1)不相等，返回假。
  * 遍历结束，始终没有返回假，则返回真。


代码：
```javascript
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
let isToeplitzMatrix = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    for(let i = 0; i < m - 1; i++>) {
        for(let j = 0; j < n - 1; j++>) {
            if(matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false
            }
        }
    }
    return true
};
```