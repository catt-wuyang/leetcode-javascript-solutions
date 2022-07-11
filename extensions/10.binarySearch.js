/**
 * 二分查找 - 时间复杂度 O(logn)
 *
 * 应用场景：数组中找目标元素，数组单调递增或递减，
 * 返回目标元素的下标，没有返回 -1
 */

/**
 * 例1 nums = [1,2,3,4,5,6,7,8] target = [2]
 */
const searchEasy = function (nums, target) {
  if (!nums.length) return -1;

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 2;
const ret = searchEasy(nums, target);
console.log(ret);

/**
 * 例2 算数平方根 - 非负整数
 *
 * 题目要求：
 * 0 的算术平方根是 0，1 的算数平方根是 1
 * 大于等于 2 的算数平方根，开根号之后返回整数部分
 */
const squareRoot = function (nums) {
  if (x < 2) return x;

  let left = 1;
  let right = x >> 1; // let right = x/2

  while (left <= right) {
    let mid = (left + right) >> 1;
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
