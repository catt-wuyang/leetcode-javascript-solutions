/**
 * 144.二叉树的前序遍历
 *
 * 描述：给定一个二叉树的根节点 root，返回它的前序遍历
 *
 * 示例：
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 */
const preorderTraversal = function (root) {
  let ret = [];
  const dfs = function (root) {
    if (root === null) return;

    ret.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return ret;
};
