/**
 * 27.移除元素
 *
 * 描述：给定数组 nums 和一个值 val
 * 需要原地移除所有等于 val 的元素，并返回数组的新长度
 *
 * 示例：
 * 输入：nums = [3,2,2,3] val = 3
 * 输出：2 [2,2]
 *
 * 输入：nums = [0,1,2,2,3,0,4,2] val = 2
 * 输出：5 [0,1,4,0,3]
 */

/**
 * 暴力解法 - filter 过滤数组
 * 因为要原地修改数组，所以再遍历一遍改原数组
 */
const removeElement = function (nums, val) {
  let arrs = nums.filter((num) => num !== val);

  for (let i = 0; i < arrs.length; i++) {
    nums[i] = arrs[i];
  }

  return arrs.length;
};

/**
 * 移动指针
 */
const removeElementBetter = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
