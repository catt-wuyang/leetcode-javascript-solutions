/**
 * 14.最长公共前缀
 *
 * 描述：给定一个字符串数组 strs，找到并返回最长公共前缀
 * 若不存在最长公共前缀，返回 ''
 *
 * 示例：
 * 输入：strs = ['flower', 'flow', 'flight']
 * 输出：'fl'
 *
 * 输入：strs = ['dog', 'car', 'cat']
 * 输出：''
 */

/**
 * 先将最长前缀设置为数组第一个字符串
 * 然后依次往后比较，两两找出最长前缀，更新 ret
 * 直到遍历到数组末尾
 */
const longestPrefix = function (strs) {
  if (!strs.length) return "";

  let ret = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < Math.min(ret.length, strs[i].length)) {
      if (ret[j] != strs[i][j]) break;
      j++;
    }
    ret = ret.substr(0, j);
  }
  return ret;
};
