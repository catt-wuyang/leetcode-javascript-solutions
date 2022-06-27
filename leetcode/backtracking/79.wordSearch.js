/**
 * 79.单词搜索
 *
 * 描述：给定一个长宽分别是 m、n 的长方格子，每个格子里对应一个字母
 * 同时给定一个单词 word 如果单词在格子内通过水平垂直相邻顺序搜索到，
 * 则返回 true，否则返回 false
 *
 * 示例：
 * 输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']] word = 'ABCCED'
 * 输出：true
 *
 * 输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']] word = 'ABCB'
 * 输出：false
 */

/**
 * 回溯 - 想像成树形结构，深入优先搜索路径，递归后不断回溯
 *
 * [['A','B','C','E'],
 *  ['S','F','C','S'],
 *  ['A','D','E','E']]
 *
 * word = 'ABCCED'
 */
const wordSearch = function (board, word) {
  // 终止条件
  if (board.length === 0) return false;
  if (word.length === 0) return true;

  // 递归函数
  const dfs = function (i, j, cur) {
    // 判断是否越界
    if (i >= row || i < 0) return false;
    if (j >= col || j < 0) return false;

    // 将当前字母储存下来
    let letter = board[i][j];

    // 判断当前查询的结果
    if (letter !== word[cur]) return false;
    if (cur === word.length - 1) return true;

    // 然后标记为 null 表示被使用过了，不能再重复使用了
    board[i][j] = null;

    // 当前字母的四个方向查找
    const ret =
      dfs(i + 1, j, cur + 1) ||
      dfs(i - 1, j, cur + 1) ||
      dfs(i, j + 1, cur + 1) ||
      dfs(i, j - 1, cur + 1);

    // 回溯撤回
    board[i][j] = letter;
    return ret;
  };

  // 遍历查找 4行3列
  // 方格里的每个元素，都可以作为起始搜索位置，i j 用来定位 board 里对应的字母位置
  // 0 作为当前搜索查询的字母索引，0 用来定位 word 里对应的字母位置
  let row = board.length;
  let col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const ret = dfs(i, j, 0);
      if (ret) return true;
    }
  }
  return false;
};
