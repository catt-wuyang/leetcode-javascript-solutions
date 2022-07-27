/**
 * 98.验证二叉搜索树
 *
 * 描述：验证是否是二叉搜索树，是返回 true，否则返回 false
 *
 * 示例：
 * 输入：root = [3,1,2]
 * 输出：true
 */

/**
 * 二叉搜索树的特点是，节点左边树全都小于当前节点，
 * 右边节点全都大于当前节点
 * 利用二叉树的中序遍历，如果是二叉搜索树，则满足单调增的情况
 * 且左右树都满足
 */
const isValidBST = function (root) {
  let cur = -Number.MAX_VALUE;

  const dfs = function (root) {
    if (root === null) return true;
    let left = dfs(root.left);
    if (cur >= root.val) {
      return false;
    }
    cur = root.val;
    let right = dfs(root.right);
    return left && right;
  };

  return dfs(root);
};
