/**
 * 28. 实现 str indexOf 的功能
 *
 * 给定两个字符串，分别是haystack needle
 * 在haystack中找到needle字符串，并返回needle字符串出现的第一个位置索引值
 * 未找到则返回 -1
 *
 * 示例：
 * 输入：haystack = 'hello' needle = 'll'
 * 输出：2
 *
 * 输入：haystack = 'aaaaaaa' needle = 'ab'
 * 输出：-1
 */

/**
 * start 是搜索 haystack 的起始位置
 * end 是needle 长度 + start，搜索范围
 * 如果在haystack中前拷贝(start,end)等于needle 则被找到了，返回start即可
 * 若没找到 start++ 直到遍历完 haystack
 * 若遍历完都没找见，则返回-1
 */
const strStr = function (haystack, needle) {
  if (!needle.length) return 0;

  let start = 0;
  for (let i = 0; i < haystack.length; i++) {
    let end = start + needle.length;
    if (haystack.slice(start, end) === needle) {
      return start;
    } else {
      start++;
    }
  }
  return -1;
};
