/**
 * 107.二叉树的层序遍历II
 *
 * 描述：给定一个二叉树的根节点 root，返回二叉树的层序遍历
 * 逐层，要求自底向上
 *
 * 示例：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[15,7],[9,20],[3]]
 */

/**
 * leetcode 102 从顶至下 ret.push(curLevel)
 * leetcode 107 自底向上 ret.unshift(curLevel)
 */
const levelorderBottom = function (root) {
  let ret = [];
  if (root === null) return ret;

  let queue = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    let curLevel = [];
    while (len > 0) {
      let node = queue.shift();
      curLevel.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
    ret.unshift(curLevel);
  }
  return ret;
};
