/**
 * 63.不同路径II
 *
 * 描述：给定一个多维数组，长宽为 m*n，起点还是左上角，终点为右下角
 * 但某些网格单元有障碍物不能走，其中 1 表示有障碍物，0 表示空位置可以走
 * 问有多少种不同的路径
 *
 * 示例：
 * 输入：[[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 */

/**
 * 动态规划
 *
 * 相比 leetcode.62 多考虑障碍物的情况
 * dp[0][0]情况是1，即起点就是终点，仅有1种走法路径
 */
const uniquePathsII = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  // 先构建多维数组n*m 初始值全部填充0
  const dp = new Array(m).fill(0).map(() => {
    return new Array(n).fill(0);
  });

  // 填充第一行、第一列的初始值，如果网格单元值为0时就可以走，其他网格单元都为0还没走
  for (let i = 0; i < m && grid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < n && grid[0][i] === 0; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
