/**
 * 20.有效的括号
 *
 * 描述：给定一个包含 ()[]{} 的字符串 s，判断它是否有效
 *
 * 示例：
 * 输入：s = "()"
 * 输出：true
 *
 * 输入：s = "([{}])"
 * 输出：true
 *
 * 输入：s = "([){"
 * 输出：false
 *
 * 输入：s = "([)]"
 * 输出：false
 */

/**
 * 栈解法
 *
 * 遇见指定符合的左边，就把它塞进 stack 中，如果遇见符合的右边，再把它从 stack 中取出来
 * 只有有效的字符串，stack 会为空，非空说明没有匹配到右边的对应符号
 */
const isValidBracket = function (s) {
  let stack = [];
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let sign = s[i];
    if (sign in obj) {
      stack.push(sign);
    } else {
      if (sign != obj[stack.pop()]) {
        return false;
      }
    }
  }

  return !stack.length;
};
