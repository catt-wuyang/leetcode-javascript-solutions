/**
 * 71.简化路径
 *
 * 描述：对给定的路径进行简化
 *
 * 示例：
 * 输入：path = '/home'
 * 输出：'/home'
 *
 * 输入：path = '/home//foo'
 * 输出：'/home/foo'
 *
 * 输入：path = '/../'
 * 输出：'/'
 *
 * 输入：path = '/a/.b/../../c/'
 * 输出：'/c'
 */

/**
 * 栈解法 - 出栈入栈
 *
 * 定义一个 stack，切分路径，如果遇见文件名 a b c 就 push 进 stack 里
 * 遇到一个 . 或空字符串不操作，遇见两个点 .. 则把刚push进去的文件给 pop 出来
 */
const simplifyPath = function (path) {
  let stack = [];
  let paths = path.split("/");

  for (let i = 0; i < paths.length; i++) {
    const p = paths[i];
    if (p === "..") {
      stack.pop();
    } else if (p && p !== ".") {
      stack.push(p);
    }
  }

  return "/" + stack.join("/");
};

simplifyPath("/home//foo");
