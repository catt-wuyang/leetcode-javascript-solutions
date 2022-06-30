/**
 * 55.跳跃游戏
 *
 * 描述：给定一个数组 nums，初始位置位于数组的第一个元素
 * 数组中的每个元素代表，所在该位置可以跳跃的最大长度，不可以超出范围
 * 判断最终跳跃是否能够到达数组的最后一个元素
 *
 * 示例：
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 *
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 */

/**
 * 贪心算法 - 每一步都找到其最优解
 * 分析第一个示例，在可以跳跃到数组末尾元素的前提下，从数组第一个元素开始2 可以跳一步或跳二步，
 * 依次类推，每步可能有多种选择，对应若干种跳法达到末尾，如 2-3-1-1-4、2-3-4、2-1-1-4 等
 * 贪心算法则是找到若干种题目解法中最优解，针对该题就是 2-3-4 最少步数跳法
 */

/**
 * 跳跃的范围包括数组末尾元素就可以
 */
const canJump = function (nums) {
  let step = 0;
  for (let i = 0; i <= step; i++) {
    // step 可以走0～2间的最大步数
    step = Math.max(step, i + nums[i]);
    if (step >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
