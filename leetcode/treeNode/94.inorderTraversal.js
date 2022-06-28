/**
 * 94.二叉树的中序遍历
 */

const inorderTraversal = function (root) {
  let ret = [];

  const dfs = function (root) {
    if (root === null) return;

    dfs(root.left);
    ret.push(root.val);
    dfs(root.right);
  };

  dfs(root);
  return ret;
};
