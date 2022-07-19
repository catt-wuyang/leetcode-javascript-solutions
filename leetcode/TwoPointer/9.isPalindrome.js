/**
 * 9.验证回文数
 *
 * 描述：给定一个整数 x，判断这个数是否是回文数
 * 是返回 true，否返回 false
 *
 * 示例；
 * 输入：121
 * 输出：true
 *
 * 输入：123
 * 输出：false
 */

/**
 * 双指针
 *
 * 1.先把整数变成字符串，拆分成数组
 * 2.左右指针遍历，比较是否相等
 * 3.相等说明是回文数，中间数与奇偶性无关
 */
const isPalindrome = function (x) {
  let nums = [...String(x)];

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] !== nums[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

/**
 * 二分思想
 */
const isPalindromeOther = function (x) {
  x = x.toString();

  for (let i = 0; i < x.length >> 1; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
