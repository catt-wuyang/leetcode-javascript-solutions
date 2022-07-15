/**
 * 337.打家劫舍III
 *
 * 描述：偷盗的地区近似看作成一棵二叉树
 * 限制条件为：
 * 1.相邻的树节点不能同时偷盗
 * 返回能偷盗的最高金额
 *
 * 示例：
 * 输入：[3,2,3,null,3,null,1] 深度优先搜索表示的二叉树
 * 输出：7
 * 3 - 3 - 1
 *
 * 输入：[3,4,5,1,3,null,1]
 * 输出：9
 * 4 - 5
 */

/**
 * 动态规划
 *
 * 根据限制条件，考虑当前节点是否被偷
 * 偷当前节点，那么左右子树就不能被偷
 * 不偷当前节点，那么左右子树可以被偷
 *
 * 二叉树遍历，常规递归写法
 */
const robIII = function (root) {
  const dfs = function (root) {
    if (root === null) return [0, 0];

    const left = dfs(root.left);
    const right = dfs(root.right);

    const doSteal = root.val + left[0] + right[0];
    const doNotSteal =
      Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [doNotSteal, doSteal];
  };

  const ret = dfs(root);
  return Math.max(...ret);
};
