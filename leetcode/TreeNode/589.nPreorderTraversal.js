/**
 * 589.N叉树的前序遍历
 *
 * 描述：给定一个n叉树的根节点root，返回其节点的前序遍历
 *
 * 示例：
 * 输入：root = [1,null,3,2,4,null,5,6]
 * 输出：[1,3,5,6,2,4]
 */
const nPreorderTraversal = function (root) {
  let ret = [];
  if (root === null) return ret;

  const dfs = function (root) {
    ret.push(root.val);
    if (root.children) {
      root.children.forEach((child) => {
        child && dfs(child);
      });
    }
  };

  dfs(root);
  return ret;
};
