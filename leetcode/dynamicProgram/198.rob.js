/**
 * 198.打家劫舍
 *
 * 描述：给定一个数组 nums，数组元素表示一条街每个房屋中存放的现金金额
 * 目的是一晚上偷窃现金的数量最大，
 * 限制条件为
 * 1.不能偷窃相邻的房屋，因为一旦触发条件会自动报警
 *
 * 示例：
 * 输入：[1,2,3,1]
 * 输出：4
 * 1 - 3
 *
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 2 - 9 -1
 */

/**
 * 动态规划
 *
 * dp[i] 表示偷盗到了第 i 户房屋时，当前累加的偷盗金额最大
 * 明确 dp[i] 的含义之后，推导递推公式
 * dp[i] 取决于两种可能，假设当前 i 偷，那么 i-2 也得偷，dp[i-2]+nums[i] 当前金额
 * 或者 i 不偷，偷 i-1，所以 i 偷不偷取决于这两者谁更大
 * dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
 *
 * 再确定初始值，dp[0] = nums[0] 会偷盗第一户
 * dp[1] 看 nums[0] nums[1] 谁大偷谁，i = 1 时就开始比较谁大偷谁
 * i >= 2 每一步根据递推公式推导累加现金如何偷最大
 */
const rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};
