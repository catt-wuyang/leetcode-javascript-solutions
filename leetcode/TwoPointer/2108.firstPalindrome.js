/**
 * 2108.找出数组中第一个回文字符串
 *
 * 描述：给定一个数组 words，找到并返回数组中的第一个回文串，
 * 未找到则返回空字符串 ''
 *
 * 示例：
 * 输入：words = ['abc','car','ada','racecar','cool']
 * 输出：'ada'
 *
 * 输入：words = ['def','gfi']
 * 输出：''
 */
const validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (validPalindrome(words[i])) {
      return words[i];
    }
  }
  return "";
};
