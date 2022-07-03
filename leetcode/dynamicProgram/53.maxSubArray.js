/**
 * 53.最大子数组和
 *
 * 描述：
 *
 * 示例：
 * 输入：
 * 输出：
 */

/**
 * 数组 [a, b, c, d, e, f]
 *
 * 遍历数组找子序列，通常有三种不同的遍历方式
 * 1.以数组开头为基准，依次遍历到结尾，[a],[a,b],[a,b,c]... 再从第二个元素开始遍历 [b],[b,c],[b,c,d]...
 * 2.以子序列长度为基准，先遍历长度为 1 的所有子序列，[a],[b],[c]... 再遍历长度为 2 的所有子序列，[a,b],[a,c],[b,c],[c,d]...
 * 3.以子序列末尾为基准，先遍历出某个末尾节点的所有子序列，因为所有元素都可作为子序列结算节点，
 * 假设以c 作为结束节点，则全部遍历子序列为 [a,b,c],[b,c],[c]
 *
 * 遍历方式1 - 暴力解法
 * 遍历方式2 - leetcode5 最长回文串
 * 遍历方式3 - 动态规划解法，要使用到递推公式
 *
 * 惯性思维常会想到方式1，但动态规划常用方式3
 */
const maxSubArray = function (nums) {
  let maxEndHere = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndHere = Math.max(nums[i], maxEndHere + nums[i]);
    maxSum = Math.max(maxSum, maxEndHere);
  }

  return maxSum;
};

/**
 * 动态规划
 *
 * dp[i] 表示以 nums[i] 为结束节点的子序列，是最大子序列和
 */
const maxSubArrayBetter = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  let ret = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    if (ret < dp[i]) {
      ret = dp[i];
    }
  }

  return ret;
};
