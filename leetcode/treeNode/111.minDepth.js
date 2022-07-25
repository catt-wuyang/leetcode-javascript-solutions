/**
 * 111.二叉树的最小深度
 *
 * 描述：给定一个二叉树的根节点 root，找出其最小的深度并返回
 * 二叉树的最小深度：从根节点到最近的叶子节点，最短路径上的所有节点数
 *
 * 示例：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
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
