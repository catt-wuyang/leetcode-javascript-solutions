/**
 * 530.二叉搜索树的最小绝对差
 *
 * 描述：给定一个二叉搜索树的根节点root，返回树中任意两个不同节点间的最小差值
 *
 * 示例：
 * 输入：root = [4,2,6,1,3]
 * 输出：1
 *
 * 输入：root = [1,0,48,null,null,12,49]
 * 输出：1
 */

/**
 * 二叉搜索树中序遍历，输出有序的数组
 * 在数组中相邻两个数差值，依次对比找最小值
 */
const minDiffBST = function (root) {
  let ret = [];
  const dfs = function (root) {
    root.left && dfs(root.left);
    ret.push(root.val);
    root.right && dfs(root.right);
  };
  dfs(root);

  let minAbs = ret[1] - ret[0];
  let k = 0;
  while (k < ret.length - 1) {
    minAbs = Math.min(minAbs, ret[k + 1] - ret[k]);
    k++;
  }
  return minAbs;
};

/**
 * 优化解法 - 在树的遍历中寻找最小差值
 */
const minDiffBSTBetter = function (root) {
  let diff = Number.MAX_VALUE;
  let preVal = null;

  const dfs = function (root) {
    if (root === null) return;
    root.left && dfs(root.left);
    if (preVal !== null && root.val - preVal < diff) {
      diff = root.val - preVal;
    }
    preVal = root.val;
    root.right && dfs(root.right);
  };
  dfs(root);
  return diff;
};
