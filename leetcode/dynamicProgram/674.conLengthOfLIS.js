/**
 * 674.最长递增连续子序列
 * 相似题目：300.最长递增子序列
 *
 * 给定一个数组nums，找到最长连续递增序列，并返回该序列的长度
 *
 * 示例：
 * 输入：nums = [1,3,5,4,7]
 * 输出：3
 */

/**
 * 动态规划
 *
 * 思路，根据nums元素在坐标轴中画折线图，连续递增的部分就是递增子序列
 * 找到最长的一段递增，即是最长递增子序列的个数
 */
const conLengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return Math.max(...dp);
};

/**
 * 贪心
 */
const conLengthOfLISGreed = function (nums) {
  let ret = (max = 1);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      ret++;
    } else {
      ret = 1;
    }
    max = Math.max(ret, max);
  }
  return max;
};
