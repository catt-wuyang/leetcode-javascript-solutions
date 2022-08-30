/**
 * 746.最小花费爬楼梯
 *
 * 描述：给定一个数组 cost，其中 cost[i] 表示从楼梯的第 i 个台阶向上爬需要支付的费用
 * 一旦支付此费用，仅可选择向上爬1阶或2阶，计算到达楼顶的最小花费
 * 可以从下标0开始爬楼梯，或者从下标1开始爬
 *
 * 示例：
 * 输入：cost = [10, 15, 20]
 * 输出：15
 * 从下标1开始爬，付15，爬2阶
 * 最终付15，爬3阶
 *
 * 输入：cost = [1,100,1,1,1,100,1,1,100,1]
 * 输出：6
 * 从下标0开始爬，付1，爬2阶
 *              付1，爬2阶
 *              付1，爬2阶
 *              付1，爬1阶
 *              付1，爬2阶
 *              付1，爬1阶
 * 最终付6，爬10阶到顶
 */

/**
 * 动态规划
 * 1. dp[i] 表示到达第i个台阶所需的最小花费
 * 因为只有两种爬法，要么走1步，要么走2步，所以第i步是取决于前一步，和前两步哪步的花费最小
 * 再此基础上，加上现在已经花费的cost[i]
 * dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
 * 2.循环从i=2开始遍历，前俩初始值都确定了
 * 3.最后两步确定最小花费选择
 */
const bestClimbStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[0] = dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
};

const bestClimbStairsOther = function (cost) {
  let dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};
