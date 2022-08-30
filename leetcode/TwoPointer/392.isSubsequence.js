/**
 * 392.判断子序列
 *
 * 给定两个字符串s、t，判断s是否是t的子序列
 *
 * 示例：
 * 输入：s = 'abc' t = 'ahbgdc'
 * 输出：true
 *
 * 输入：s = 'axc' t = 'ahbgdc'
 * 输出：false
 */

/**
 * 双指针
 *
 * 边界条件判断 s t 的长度
 * 定义两个指针，分别用来遍历 s 和 t 字符串，且都从起始 0  开始
 * 根据 t 的长度遍历结束
 * 如果遇见s的值等于t的值，就让s指针加1
 * 不管是否相等，t 指针都往前加1
 * 如果s是t的子序列，那么slow必定遍历完字符串s
 * 所以判断slow等于s.length 判断子序列
 */
const isSubsequence = function (s, t) {
  if (!s.length) return true;
  if (!t.length) return false;

  let slow = 0;
  let fast = 0;
  let len = t.length;
  while (len > 0) {
    if (s[slow] === t[fast]) {
      slow++;
    }
    fast++;
    len--;
  }
  return slow === s.length ? true : false;
};
