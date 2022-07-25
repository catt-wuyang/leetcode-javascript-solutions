/**
 * 257.二叉树的所有路径
 *
 * 描述：给定一个二叉树的根节点 root，
 * 返回所有从根节点到叶子节点的路径
 *
 * 示例：
 * 输入：root = [1,2,3,null,5]
 * 输出：["1->2->5","1->3"]
 */

/**
 * dfs 深度优先遍历
 */
const allPaths = function (root) {
  let ret = [];
  if (root === null) return ret;

  const dfs = function (root, path) {
    if (!root.left && !root.right) {
      ret.push(path.join("->"));
    }

    root.left && dfs(root.left, [...path, root.left.val]);
    root.right && dfs(root.right, [...path, root.right.val]);
  };

  dfs(root, [root.val]);
  return ret;
};
