/**
 * 322.兑换零钱
 *
 * 描述：给定一个数组 coins，其中包含不同面值的硬币，且每种硬币可以无限使用
 * 再给定一个金额 amount，计算并返回可凑成总金额所需的最少硬笔数
 * 无法凑成总金额，则返回 -1
 *
 * 示例：
 * 输入：coins = [1,2,5] amount = 11
 * 输出：3 其中最少零钱组成为 5+5+1=11
 *
 * 输入：coins = [2] amount = 3
 * 输出：-1
 */

/**
 * 动态规划
 *
 * 分解子问题，自顶向下思考题目，自底向上解题
 *
 * 硬币面额 [1,2,5] 总金额 120
 * dp[i] 总金额为 i 时最优解法的硬币数量
 *    分析总金额为 120 时有三种兑换方法，此处就根据硬币面额分解，总金额先不考虑
 *    1. 硬币面额 1 + 总金额 119，即 dp[119] + 1
 *    2. 硬币面额 2 + 总金额 118，即 dp[118] + 2
 *    3. 硬币面额 5 + 总金额 115，即 dp[115] + 5
 * 再分析三种兑换方法中，最优解也就是硬币数量最少的一种
 *    dp[120] = Math.min(dp[119] + 1, dp[118] + 2, dp[115] + 5)
 * 递推公式
 *    dp[i] = Math.min(dp[i], dp[i - coin] + 1)
 * coins 中有多少种硬币面额，就遍历多少次
 *
 *
 *
 */
const coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
