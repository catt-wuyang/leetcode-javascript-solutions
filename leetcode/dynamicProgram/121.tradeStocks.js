/**
 * 121.买卖股票的最佳时机
 *
 * 描述：给定一个数组 prices，prices[i] 表示股票第 i 天的价格，
 * 先买入再卖出，返回所能获得的最大收益
 * 限制条件：仅能交易一次
 *
 * 示例：
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：5 在第2天买入，第5天卖出，能获得最大利润是 5
 *
 * 输入：prices = [7,6,4,3,1]
 * 输出：0 因为股票价格是一直跌的，所以不存在获利的情况，不进行股票交易，利润为 0
 */

/**
 * 暴力解法 - 双层循环，更新 ret 找最大利润
 */
const maxProfit = function (prices) {
  let ret = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (prices[i] - prices[j] > 0) {
        ret = Math.max(ret, prices[i] - prices[j]);
      }
    }
  }
  return ret;
};

/**
 * 贪心解法
 */
const maxProfitBetter = function (prices) {
  let minPrice = prices[0];
  let ret = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    ret = Math.max(ret, prices[i] - minPrice);
  }

  return ret;
};

/**
 * 动态规划
 *
 * dp[i] 表示第i天卖出股票收益最大
 * minPrice prices[i] 前i项获取最小值
 * prices[i] - minPrice 当前卖出股票最大收益
 * dp[i-1] 表示第i-1天卖出股票最大收益
 *
 * dp[i] 要比较前一天卖出的最大收益，和当天卖出最大收益，哪个大哪天卖出
 * 边遍历边找哪天卖出股票收益最大
 *
 * 返回 dp[prices.length-1] dp数组最后一个值表示最大收益
 *
 * prices[i] - dp[i]
 * [7] - [0]
 * [7,1] - [0,0]
 * [7,1,5] - [0,0,4]
 * [7,1,5,3] - [0,0,4,4]
 * [7,1,5,3,6] - [0,0,4,4,5]
 * [7,1,5,3,6,4] - [0,0,4,4,5,5]
 */
const maxProfitDS = function (prices) {
  let dp = new Array(prices.length).fill(0);
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
  }

  return dp[prices.length - 1];
};

/**
 * 动态规划 - 容易理解解法
 *
 * dp[i] 表示第i天卖出股票利润最大
 * 遍历数组，找到第i天卖出时，0到i-1天最小价格
 * dp[i] 每个元素表示第i天减去最低价格，获得的最大利润
 * 最后返回 dp 中最大值，即是最大利润
 */
const maxProfitEasy = function (prices) {
  let minPrice = prices[0];
  const dp = [0];
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(prices[i], minPrice);
    dp[i] = prices[i] - minPrice;
  }
  return Math.max(...dp);
};
