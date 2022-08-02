/**
 * 938.二叉搜索树的范围和
 *
 * 描述：给定一个二叉搜索树的根节点root，
 * 返回位于范围[low,high]之间的所有节点值的和
 *
 * 示例：
 * 输入：root = [10,5,15,3,7,null,18] low = 5 high = 15
 * 输出：32
 */

/**
 * 中序遍历二叉搜索树，得到有序的数组
 * 遍历数组，返回范围在[low, high]之前的元素累加和
 */
const rangeSumBST = function (root) {
  let ret = [];
  const dfs = function (root) {
    if (root === null) return;
    root.left && dfs(root.left);
    ret.push(root.val);
    root.right && dfs(root.right);
  };
  dfs(root);

  let sum = 0;
  for (let i = 0; i < ret.length; i++) {
    if (low <= ret[i] && ret[i] <= high) {
      sum += ret[i];
    }
  }
  return sum;
};

/**
 * 优化
 *
 * 节点为空，返回0
 * 当前节点值 < low 要往右边找，无需考虑左子树了，因为左子树的值都比当前节点值都小
 * 当前节点值 > high 要往左边找，无需考虑右子树了，因为右子树的值比当前节点值都大
 */
const rangeSumBSTBetter = function (root) {
  if (root === null) return 0;
  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }
  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }
  return (
    root.val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
};
