/**
 * 110.平衡二叉树
 *
 * 描述：
 *
 * 示例：
 * 输入：
 * 输出：
 */
const isBalancedTree = function (root) {
  let ret = true;
  const dfs = function (root) {
    if (root === null) return false;
    if (!ret) return;
    const ld = dfs(root.left);
    const rd = dfs(root.right);

    if (Math.abs(ld - rd) > 1) {
      ret = false;
    }
    return Math.max(ld, rd) + 1;
  };
  dfs(root);
  return ret;
};

/**
 * 优化
 */
const isBalancedTreeBetter = function (root) {
  const dfs = function (root) {
    if (root === null) return 0;
    const ld = dfs(root.left);
    const rd = dfs(root.right);
    if (ld === -1) return -1;
    if (rd === -1) return -1;
    if (Math.abs(ld - rd) > 1) return -1;
    return Math.max(ld, rd) + 1;
  };
  return dfs(root) !== -1;
};
