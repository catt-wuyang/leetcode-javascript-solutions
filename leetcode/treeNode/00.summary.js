/**
 * 二叉树
 */

const treeNodeTraverse = function (root) {
  const dfs = function (root) {
    if (root === null) return;

    dfs(root.left);
    dfs(root.right);
  };

  const ret = dfs(root);
  return ret;
};
