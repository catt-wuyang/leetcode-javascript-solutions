/**
 * 104.二叉树的最小深度
 *
 * 描述：给定一个二叉树，找出其最小的深度并返回
 * 二叉树的最小深度：根节点到叶节点的最长路径上的节点数
 */

/**
 * 递归
 */
const minDepth = function (root) {
  if (root === null) {
    return 0;
  } else if (root.left === null) {
    return minDepth(root.right) + 1;
  } else if (root.right === null) {
    return minDepth(root.left) + 1;
  } else {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }
};
