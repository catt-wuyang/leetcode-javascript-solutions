/**
 * 541.反转字符串II
 *
 * 描述：给定一个字符串s，和一个整数k，每计数到2k时就反转当前的字符串，
 * 剩余的字符串长度<k 则剩余字符串全部反转
 * 剩余字符串k-2k 间，则反转前k个字符串
 * 返回反转后的字符串
 *
 * 示例：
 * 输入：s = 'abcdefg' k = 2
 * 输出：'bacdfeg'
 */

/**
 * 根据题目要求，找规律反转的字符串的范围
 * 假设字符串s长度为n，那么反转的字符串位置是
 * [0,1] [4,5] [8,9]...
 * i = 0 reverse = i + k * 0 = 0
 * i = 1 reverse = i + k * 0 = 1
 * i = 2 reverse = i + k * 1 = 4
 * i = 3 reverse = i + k * 1 = 5
 *
 * 把字符串转成数组，利用解构赋值反转时才会生效，最后再转回字符串
 */
const helper = function (arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

const reverseStr = function (s, k) {
  const arr = [...s];
  for (let i = 0; i < arr.length; i += 2 * k) {
    helper(arr, i, i + k - 1);
  }
};
