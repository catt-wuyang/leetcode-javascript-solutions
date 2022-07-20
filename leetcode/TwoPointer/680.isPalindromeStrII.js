/**
 * 680.验证回文串III
 *
 * 描述：给定一个字符串 s，判断字符串是否是回文串
 * 可以最多删掉一个字符后验证是回文串也可以
 * 是返回 true，否返回 false
 *
 * 示例：
 * 输入：'abba'
 * 输出：true
 *
 * 输入：'abcbba'
 * 输出：true
 * 要么删掉c 要么删掉b 也是回文串
 */

/**
 * 双指针 - 左右指针
 *
 * 一旦左右指针字符不等，判断删掉一个字符后是否为回文
 * 要么删左字符 [left+1,right]
 * 要么删右字符 [left, right-1]
 * 其中某种情况校验通过即可
 */
const validPalindrome = function (str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        validPalindrome(s, left + 1, right) ||
        validPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
};
