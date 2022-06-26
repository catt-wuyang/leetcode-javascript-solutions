/**
 * 169.多数元素
 *
 * 描述：给定一个数组 nums，长度为 n，返回数组中某个元素出现的次数大于 n/2
 *
 * 示例：
 * 输入：nums = [3,2,3]
 * 输出：3
 *
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 */

/**
 * 暴力解法
 *
 * 遍历 nums 记录每个元素出现的次数，再找到出现次数最多的那个元素
 */
const majorityElement = function (nums) {
  let len = nums.length;
  let obj = {};

  for (let i = 0; i < len; i++) {
    if (nums[i] in obj) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] > len / 2) {
      return key;
    }
  }
};

/**
 * 排序，再找中位数
 */
const majorityElementBetter = function (nums) {
  const sortNums = nums.sort((a, b) => a - b);
  return sortNums(parseInt(nums.length / 2));
};
