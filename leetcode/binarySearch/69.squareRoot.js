/**
 * 69. x 的平方根
 *
 * 描述：给定一个非负整数 x，计算并返回 x 的算数平方根
 * 要求：返回部分仅保留整数部分，舍去小数部分
 *
 * 示例：
 * 输入：x = 4
 * 输出：2
 *
 * 输入：x = 8
 * 输出：2
 *
 * 输入：x = 1
 * 输出：1
 *
 * 输入：x = 0
 * 输出：0
 */

/**
 * 二分查找思想
 */
const squareRoot = function (x) {
  if (x < 2) return x;

  let left = 1;
  let right = x >> 1;
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
