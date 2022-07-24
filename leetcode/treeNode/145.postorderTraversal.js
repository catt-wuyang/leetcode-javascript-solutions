/**
 * 145.二叉树的后序遍历
 *
 * 描述：给定一个二叉树的根节点 root，返回它的后序遍历
 *
 * 示例：
 * 输入：root = [1,null,2,3]
 * 输出：[3,2,1]
 */
const preorderTraversal = function (root) {
  let ret = [];
  const dfs = function (root) {
    if (root === null) return;

    dfs(root.left);
    dfs(root.right);
    ret.push(root.val);
  };

  dfs(root);
  return ret;
};
