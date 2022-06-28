/**
 * 101.对称二叉树
 *
 * 描述：给定一个二叉树的根节点 root，判断它是否是轴对称
 *
 * 示例：
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 */

/**
 * 解题思路：二叉树如果轴对称，说明它是镜像对称的，根节点相同
 * 如果根节点为 null 必然对称
 * 左右子树都为 null 也必然对称
 * 左右子树都存在的一般情况下，左右子树的根节点是相等的
 * 且递归检查它们的子左树和右子树也是相同的
 */
const isSymmetric = function (root) {
  if (root === null) return true;

  const checkTreeNode = function (left, right) {
    if (left === null && right === null) {
      return true;
    }

    if (left && right) {
      return (
        left.val === right.val &&
        checkTreeNode(left.left, right.right) &&
        checkTreeNode(left.right, right.left)
      );
    }

    return false;
  };

  return checkTreeNode(root.left, root.right);
};
