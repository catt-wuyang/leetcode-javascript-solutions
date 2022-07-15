/**
 * 213.打家劫舍II
 *
 * 描述：给定一个数组 nums，数组元素表示一条街每个房屋中存放的现金金额
 * 目的是一晚上偷窃现金的数量最大，
 * 限制条件为：
 * 1.不能偷窃相邻的房屋，因为一旦触发条件会自动报警
 * 2.房屋成闭环，第一户和最后一户是相邻房屋，不能同时偷盗
 *
 * 示例：
 * 输入：[2,3,2]
 * 输出：3
 *
 * 输入：[1,2,3,1]
 * 输出：4
 * 1 - 3
 */

/**
 * 动态规划
 *
 * 由于有房屋首尾相连的限制，所以考虑两种情况
 * 有头无尾，范围[0, nums.length - 2]
 * 有尾无头，范围[1, nums.length - 1]
 * 分情况划定偷窃范围[start, end]
 *
 * 对比 leetcode.198 抽象出了 start-end 的偷盗范围
 * 本质上 dp[i] 递推公式是不变的
 */
const robII = function (nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);

  return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1));
};

const robRange = function (nums, start, end) {
  const dp = new Array(nums.length - 1).fill(0);
  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[end];
};

/**
 * 198.打家劫舍
 */
const rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};
