/**
 * 118.杨辉三角
 *
 * 给定一个正整数 numRows 表示三角形的行数
 * 三角形每格子数等于它左上角和右上角的和
 *
 * 示例：
 * 输入：numRows = 5
 * 输出：[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */

/**
 * 动态规划
 */
const YHTriangle = function (numRows) {
  let ret = [];

  for (let i = 0; i < numRows; i++) {
    let dp = new Array(i + 1).fill(1);
    for (let j = 1; j < dp.length - 1; j++) {
      dp[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(dp);
  }
  return ret;
};
