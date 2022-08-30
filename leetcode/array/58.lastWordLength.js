/**
 * 58.字符串最后一个单词的长度
 *
 * 给定一个字符串，可能包含英文单词、空格、双引号，
 * 找到字符串最后一个单词并返回其长度
 *
 * 示例：
 * 输入：s = "Hello World  "
 * 输出：5
 */

/**
 * 字符串分割数组，再筛选掉空字符串
 */
const LastWordLength = function (s) {
  s = s.split(" ").filter((item) => item !== "");
  return s[s.length - 1].length;
};

/**
 * 指针
 */
const LastWordLengthPoint = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (end >= 0) {
    if (s[end] !== " ") {
      start++;
    }
    if (s[end] == " " && start) {
      return start;
    }
    if (end === 0) {
      return start;
    }
    end--;
  }
};
