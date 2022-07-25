/**
 * 199.二叉树的右视图
 *
 * 描述：给定一个二叉树的根节点 root，
 * 返回从右侧能观察到的所有节点
 *
 * 示例：
 * 输入：root = [1,2,3,null,5,null,4]
 * 输出：[1,3,4]
 */

/**
 * 解题思路是层序遍历，
 * 但仅返回每层最右侧的节点
 *
 * len 记录每层所有节点数，当遍历每层节点时，len为零时当前节点就是最右边的节点
 */
const rightSideView = function (root) {
  let ret = [];
  if (root === null) return ret;

  let queue = [root];
  while (queue.length) {
    let len = queue.length;

    while (len--) {
      let node = queue.shift();
      if (len === 0) {
        ret.push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return ret;
};
