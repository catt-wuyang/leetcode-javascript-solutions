/**
 * 125.验证回文串
 *
 * 描述：给定一个字符串 s，判断字符串是否是回文串
 * 忽略特殊符号和大小写，仅验证由 ASCII 字符组成的字符串
 * 是返回 true，否返回 false
 *
 * 示例：
 * 输入：'12#47%'
 * 输出：false
 *
 * 输入："A man, a plan, a canal: Panama"
 * 输出：true
 */

/**
 * 双指针
 *
 * 对字符串进行过滤后再验证
 */
const isPalindromeII = function (s) {
  s = [...s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase()];

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
