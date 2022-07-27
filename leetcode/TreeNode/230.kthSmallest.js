/**
 * 230.二叉搜索树中第k小的元素
 *
 * 描述：给定一个二叉搜索树的根节点root，和一个整数k，
 * 查找并返回第k个最小的元素，从1开始计数
 *
 * 示例：
 * 输入：root = [3,1,4,null,2] k = 1
 * 输出：1
 */

/**
 * DFS 中序遍历二叉搜索树，数组元素都是单调增的
 * 找第k个最小的元素，直接返回ret[k-1]即可
 */
const kthSmallest = function (root, k) {
  let ret = [];
  const dfs = function (root) {
    root.left && dfs(root.left);
    ret.push(root.val);
    root.right && dfs(root.right);
  };
  dfs(root);
  return ret[k - 1];
};

/**
 * 题目中找二叉搜索树第k最小的元素，因为二叉搜索树的特性，
 * 肯定是往根节点左子树上找，先遍历一遍左子树，
 * 遍历完之后最后一个元素就是最小值，再往回找，
 * 找到第k个时即是第k个最小的元素
 */
const kthSmallestBFS = function (root, k) {
  let count = 0;
  let stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root); // 左子树都推入栈里
      root = root.left;
    }
    root = stack.pop(); // 遍历完出栈
    count++;
    if (count === k) {
      return root.val; // 找到了
    }
    root = root.right; // 找到最后往左子树的右枝上找
  }
};
