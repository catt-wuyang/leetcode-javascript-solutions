/**
 * 222.二叉树的节点数
 *
 * 描述：给定一个二叉树的根节点root，返回该树的节点数量
 *
 * 示例：
 * 输入：root = [1,2,3,4,5,6]
 * 输出：6
 */

/**
 * 直接解法
 *
 * 对二叉树前/中/后序遍历，返回填充了所有节点的数组的长度
 * 就是二叉树的节点数量
 */
const countNode = function (root) {
  let ret = [];
  const dfs = function (root) {
    if (root === null) return 0;
    root.left && dfs(root.left);
    ret.push(root.val);
    root.right && dfs(root.right);
  };
  dfs(root);
  return ret.length;
};

/**
 * 优化
 */
const countNodeBetter = function (root) {
  const dfs = function (root) {
    if (root === null) return 0;

    let leftCount = dfs(root.left);
    let rightCount = dfs(root.right);
    return leftCount + rightCount + 1;
  };
  return dfs(root);
};
