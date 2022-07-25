/**
 * 637.二叉树的每层平均值
 *
 * 描述：给定一个二叉树的根节点root，返回一个数组，
 * 每个元素为二叉树每层的平均值
 *
 * 示例：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[3, 14.5, 11]
 */

/**
 * BFS 广度优先搜索 + 队列
 *
 * 套公式时，注意循环使用 while 还是 for，看场景哪个更合适用哪个
 * 1.看定义的变量i是否被用到了
 * 2.看每层所有节点数 len 是否需要被修改
 */
const averageLevel = function (root) {
  let ret = [];
  if (root === null) return ret;

  let queue = [root];
  while (queue.length) {
    let originLen = (len = queue.length);
    let curSum = 0;
    while (len--) {
      let node = queue.shift();
      curSum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ret.push(curSum / originLen);
  }
  return ret;
};

const averageLevelBetter = function (root) {
  let ret = [];
  if (root === null) return ret;

  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let curSum = 0;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      curSum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ret.push(curSum / len);
  }
  return ret;
};
