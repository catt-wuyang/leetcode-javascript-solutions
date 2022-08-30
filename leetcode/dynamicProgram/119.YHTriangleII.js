/**
 * 118.杨辉三角II
 *
 * 给定一个正整数 rowIndex 表示三角形的第几行
 * 三角形每格子数等于它左上角和右上角的和
 *
 * 示例：
 * 输入：rowIndex = 3
 * 输出：[1,3,3,1]
 */

/**
 * 动态规划
 */
const YHTriangle = function (rowIndex) {
  let ret = [];

  for (let i = 0; i < rowIndex + 1; i++) {
    let dp = new Array(i + 1).fill(1);
    for (let j = 1; j < dp.length - 1; j++) {
      dp[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(dp);
  }
  return ret[rowIndex];
};
