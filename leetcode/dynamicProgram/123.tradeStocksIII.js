/**
 * 123.买卖股票的最佳时机III
 *
 * 描述：给定一个数组 prices，prices[i] 表示股票第 i 天的价格，
 * 先买入再卖出，返回所能获得的最大收益
 * 限制条件：最多能交易两次
 *
 * 示例：
 * 输入：[3,3,5,0,0,3,1,4]
 * 输出：6
 * 第4天买入，第6天卖出，所得利润 3-0=3
 * 第7天买入，第8天卖出，所得利润 4-1=3
 * 总利润 3+3=6
 */

/**
 * 动态规划
 */
const maxProfit = function (prices) {
  const dp = new Array(3).fill(0).map(() => new Array(prices.length).fill(0));

  for (let i = 1; i < 3; i++) {
    let maxProfit = -prices[0];
    for (let j = 1; j < prices.length; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxProfit);
      maxProfit = Math.max(maxProfit, dp[i - 1][j] - prices[j]);
    }
  }
  return dp[2][prices.length - 1];
};
