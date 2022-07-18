/**
 * 122.买卖股票的最佳时机II
 *
 * 描述：给定一个数组 prices，prices[i] 表示股票第 i 天的价格，
 * 先买入再卖出，返回所能获得的最大收益
 * 限制条件：可以交易多次
 *
 * 示例：
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：第2天买入，第3天卖出，利润为 5-1=4
 * 再第4天买入，第5天卖出，利润为 6-3=3
 * 最大总利润为 4+3=7
 *
 * 输入：prices = [7,6,4,3,1]
 * 输出：0 因为股票价格是一直跌的，所以不存在获利的情况，不进行股票交易，利润为 0
 */

/**
 * 贪心算法 - 当天和前一天相比较，累加收益金额
 */
const maxProfit = function (prices) {
  let ret = 0;
  for (let i = 1; i < prices.length; i++) {
    ret += Math.max(prices[i] - prices[i - 1], 0);
  }
  return ret;
};

/**
 * 动态规划
 */
const maxProfitBetter = function (prices) {
  let profit = 0;
  let min = prices[0];
  let max = prices[0];

  while (i < prices.length) {
    while (prices[i] <= prices[i - 1]) {
      i++;
    }
    min = prices[i];
    while (prices[i] >= prices[i - 1]) {
      i++;
    }
    max = prices[i];
    profit += max - min;
  }
  return profit;
};
