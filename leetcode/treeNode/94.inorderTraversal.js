/**
 * 94.二叉树的中序遍历
 *
 * 描述：给定一个二叉树的根节点 root，返回它的中序遍历
 *
 * 示例：
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
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
