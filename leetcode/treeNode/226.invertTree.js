/**
 * 226.翻转二叉树
 *
 * 描述：给定一棵二叉树的根节点 root，翻转这棵二叉树，并返回其根节点
 *
 * 示例：
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 */

/**
 * [a,b] = [b,a]
 */
const invertTree = function (root) {
  if (root === null) {
    return null;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

const invertTreeBetter = function (root) {
  if (root === null) return root;

  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
