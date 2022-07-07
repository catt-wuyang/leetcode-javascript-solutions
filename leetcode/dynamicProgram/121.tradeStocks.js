/**
 * 121.买卖股票的最佳时机
 *
 * 描述：给定一个数组prices，prices[i] 表示股票每 i 天的价格，
 * 限制条件为卖出必须在买入之后进行，股票收益为正，否则返回 0
 * 找到交易股票最大利润
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
  let init = prices[0];
  let ret = 0;

  for (let i = 0; i < prices.length; i++) {
    init = Math.min(init, prices[i]);
    ret = Math.max(ret, prices[i] - init);
  }

  return ret;
};
