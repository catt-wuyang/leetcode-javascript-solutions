/**
 * 188.买卖股票的最佳时机IV
 *
 * 描述：给定一个数组 prices，prices[i] 表示股票第 i 天的价格，
 * 先买入再卖出，返回所能获得的最大收益
 * 限制条件：最多能交易k次
 */

/**
 * 动态规划
 *
 * 根据 leetcode.123 最多交易2次，将k替换掉2
 */
const maxProfit = function (k, prices) {
  if (!prices.length) {
    return 0;
  }
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(prices.length).fill(0));

  for (let i = 1; i < k + 1; i++) {
    let maxProfit = -prices[0];
    for (let j = 1; j < prices.length; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxProfit);
      maxProfit = Math.max(maxProfit, dp[i - 1][j] - prices[j]);
    }
  }
  return dp[k][prices.length - 1];
};
