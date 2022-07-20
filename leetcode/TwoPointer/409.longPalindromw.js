/**
 * 409.最长回文串
 *
 * 描述：给定一个字符串 s，其中包括大写和小写字母构成，
 * 返回可以构成最长回文串
 *
 * 示例：
 * 输入：'abccccdd'
 * 输出：7
 * 最长回文串 'dccaccd' 或 'dccbccd'
 */

/**
 * 利用 Map 存储健值对，保存每个字母出现的次数
 * 遍历 Map 偶数直接累加，奇数则累加-1
 * 最后如果还有次数为 1 的，累加再加一，可以放在回文串的中间位置
 */
const longPalindrome = function (s) {
  let records = new Map();
  for (let i = 0; i < s.length; i++) {
    if (records.has(s[i])) {
      records.set(s[i], records.get(s[i]) + 1);
    } else {
      records.set(s[i], 1);
    }
  }

  let ret = 0;
  records.forEach((count) => {
    if (count % 2 === 0) {
      ret += count;
    } else {
      ret += count - 1;
    }
  });

  if (s.length > ret) {
    ret += 1;
  }
  return ret;
};
