/**
 * 557.反转字符串中的单词
 *
 * 描述：给定一个字符串s，构成一段话
 * 要求仅反转每个单词顺序，保证单词在整段话中的顺序不变
 * 返回反转后的字符串
 *
 * 示例：
 * 输入：s = "God Ding sheep"
 * 输出："doG gniD peehs"
 */

/**
 * 拼接字符串解法
 *
 * 遍历字符串s，未遇到空格时说明是一个单词，从后往前拼接单词字母相当于反转了
 * 遇到空格，就把刚才反转后的单词拼接到返回结果中
 * 初始化 word 进行下一个单词的反转
 */
const reverseStr = function (s) {
  let ret = "";
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      ret += word;
      ret += " ";
      word = "";
    } else {
      word = s[i] + word;
    }
  }
  ret += word;
  return ret;
};

/**
 * 官方题解 - 遍历字符串，遇到空格时有一个单词区间 start - i
 * 在这个起止范围内说明是一个完整的单词，反转并拼接到返回结果中
 * 直至遍历完成
 */
const reverseStrBetter = function (s) {
  const ret = [];

  let i = 0;
  while (i < s.length) {
    let start = i;
    while (i < s.length && s.charAt(i) != " ") {
      i++;
    }
    for (let p = start; p < i; p++) {
      ret.push(s.charAt(start + i - 1 - p));
    }
    while (i < s.length && s.charAt(i) == " ") {
      ret.push(" ");
      i++;
    }
  }

  return ret.join("");
};
