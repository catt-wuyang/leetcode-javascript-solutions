/**
 * 543.二叉树的直径
 *
 * 描述：给定一棵二叉树，需要计算它的直径长度
 * 直径长度是指二叉树中最长的一条路径
 *
 * 示例：
 * 输入：[1,2,3,4,5,null,null]
 * 输出：3 最长路径[4,2,1,3] 或者是 [5,2,1,3]
 */

const diameterOfBinaryTree = function (root) {
  let ret = 0;

  const dfs = function (root) {
    if (root === null) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    ret = Math.max(ret, left + right);
    return Math.max(left, right) + 1;
  };

  dfs(root);
  return ret;
};
