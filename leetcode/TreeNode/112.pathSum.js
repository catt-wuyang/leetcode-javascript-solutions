/**
 * 112.路径总和
 *
 * 描述：给定一个二叉树的根节点root，和一个目标值 target
 * 判断二叉树的所有路径从根节点到叶子节点，
 * 是否存在某条路径上所有节点的和等于目标值，存在返回 true
 * 不存在返回 false
 *
 * 示例：
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1] targetSum = 22
 * 输出：true
 * 路径为 5-4-11-2
 */
const pathSum = function (root, targetSum) {
  if (root === null) return false;
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  let offset = targetSum - root.val;
  return pathSum(root.left, offset) || pathSum(root.right, offset);
};
