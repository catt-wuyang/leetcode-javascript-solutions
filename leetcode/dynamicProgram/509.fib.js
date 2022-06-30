/**
 * 509.斐波那契数列
 *
 * 描述：该数列由 0 和 1 开始，后面的每一项数字都是前两项数字的和
 * F(0) = 0
 * F(1) = 1
 * F(n) = F(n - 1) + F(n - 2) 其中 n > 1
 *
 * 示例：
 * 输入：n = 2
 * 输出：2
 *
 * 输入：n = 4
 * 输出：3
 */

/**
 * 递归
 *
 * 根据公式写递归，但相对低效
 */
const fib = function (n) {
  if (n <= 1) return n;
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  }
};

/**
 * 动态规划
 *
 * 创建 let dp = [0,1] 确定初始值
 * 确定递推公式
 */
const fibBetter = function (n) {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/**
 * 复杂度优化
 *
 * 解题思路为后移指针，最终返回 dp[i] 对应的结果 cur
 */
const fibPolish = function (n) {
  if (n <= 1) return n;

  let prev = 0;
  let cur = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + cur;
    prev = cur;
    cur = next;
  }
  return cur;
};
