/**
 * 590.N叉树的后序遍历
 *
 * 描述：给定一个n叉树的根节点root，返回其节点的后序遍历
 *
 * 示例：
 * 输入：root = [1,null,3,2,4,null,5,6]
 * 输出：[5,6,3,2,4,1]
 */
const nPostorderTraversal = function (root) {
  let ret = [];
  if (root === null) return ret;

  const dfs = function (root) {
    if (root.children) {
      root.children.forEach((child) => {
        child && dfs(child);
      });
    }
    ret.push(root.val);
  };

  dfs(root);
  return ret;
};
