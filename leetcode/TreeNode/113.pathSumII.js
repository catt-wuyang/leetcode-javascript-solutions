/**
 * 113.二叉树的路径总和II
 *
 * 描述：给定一个二叉树的根节点root，和一个目标值 target
 * 判断二叉树的所有路径从根节点到叶子节点，
 * 是否存在某条路径上所有节点的和等于目标值，存在返回所有满足条件的路径
 *
 * 示例：
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1] targetSum = 22
 * 输出：[[5,4,11,2],[5,8,4,5]]
 */

/**
 * leetcode 112 找到满足等于目标和即可
 * leetcode 113 找到所有满足等于目标和的路径，因此要记录下来所有路径，
 * 深度优先遍历完成后满足条件的填充到返回值数组中
 * dfs(root, path, sum) 要记录每条路径，还要记录每条路径和
 */
const pathSumII = function (root, targetSum) {
  let ret = [];
  if (root === null) return ret;
  const dfs = (root, path, sum) => {
    if (!root.left && !root.right) {
      if (sum === targetSum) {
        return ret.push(path);
      }
    }

    root.left && dfs(root.left, [...path, root.left.val], sum + root.left.val);
    root.right &&
      dfs(root.right, [...path, root.right.val], sum + root.right.val);
  };

  dfs(root, [root.val], root.val);
  return ret;
};
