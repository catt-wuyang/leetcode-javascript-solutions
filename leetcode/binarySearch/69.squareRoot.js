/**
 * 69. x 的平方根
 *
 * 描述：给定一个非负整数 x，计算并返回 x 的算数平方根
 * 要求：返回部分仅保留整数部分，舍去小数部分
 *
 * 示例：
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
 * 二分查找
 *
 * 小于2直接返回x
 * 整数的平方根一定在(1,x)范围内的
 * mid*mid > x 且 (mid+1)*(mid+1) < x 那么 mid 就是 x 的平方根
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

const squareRootEasyUS = function (x) {
  if (x < 2) return x;

  let left = 1;
  let right = x >> 1;
  while (left <= right) {
    let mid = (right + left) >> 1;
    if (mid * mid <= x) {
      if ((mid + 1) * (mid + 1) > x) {
        return mid;
      }
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1;
    }
  }
};
