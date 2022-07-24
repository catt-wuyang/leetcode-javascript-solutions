/**
 * 104.二叉树的最大深度
 *
 * 描述：给定一个二叉树，找出其最大的深度并返回
 * 二叉树的最大深度：根节点到叶节点的最长路径上的节点数
 *
 * 示例：
 * 输入：[3, 9, 20, null, null, 15, 7]
 * 输出：3   3-20-7 或 3-20-15
 */

/**
 * 递归
 *
 * 树的最大深度，等于左子树的深度 & 右子树的深度，左右取最大 + 1
 * 递归首先想好终止条件，然后是每步可以重复的处理逻辑
 * 此题的终止条件是，递归遍历当 root 没有子节点时停止遍历
 */
const maxDepth = function (root) {
  if (root === null) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
