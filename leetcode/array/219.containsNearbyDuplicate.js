/**
 * 219.存在重复元素
 *
 * 描述：给定数组 nums 和一个整数 k，判断数组中是否存在两个元素 i j
 * 索引值不同，但 nums[i] === nums[j]，且 abs(i - j) <= k
 *
 * 示例：
 * 输入：nums = [1,2,3,1] k = 3
 * 输出：true   存在i=0 j=3 且值相等 abs(3-0) <= 3
 *
 * 输入：nums = [1,2,3,1,2,3] k = 2
 * 输出：false
 */

/**
 * 暴力解法 - 嵌套循环，判断条件
 */
const containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};
