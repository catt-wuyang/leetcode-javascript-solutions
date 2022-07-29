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
 * 递归解法
 *
 * 1. 先找递归的子问题，左右节点翻转，互换位置
 * 2. 找到终止条件
 */
const invertTree = function (root) {
  if (root === null) {
    return root;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
