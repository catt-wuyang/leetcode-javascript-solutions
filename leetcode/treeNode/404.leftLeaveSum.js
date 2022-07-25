/**
 * 404.左叶子之和
 *
 * 描述：给定一个二叉树的根节点root，返回所有左叶子的和
 * 左叶子指从根节点到该路径最底层的左节点
 *
 * 示例：
 * 输入：root = [3.9.20.null,null,15,7]
 * 输出：24
 */

/**
 * BFS 广度优先遍历 + 队列
 *
 * 主要判断左子树节点遍历时，如果是左叶子，累加到结果中返回
 */
const leftLeaveSumBFS = function (root) {
  let ret = 0;
  if (root === null) return ret;

  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node.left) {
      if (node.left.left === null && node.left.right === null) {
        ret += node.left.val;
      } else {
        queue.push(node.left);
      }
    }
    node.right && queue.push(node.right);
  }
  return ret;
};

/**
 * DFS 深度优先遍历 - 递归
 */
const leftLeaveSumDFS = function (root) {
  let ret = 0;
  if (root === null) return ret;

  const dfs = function (root, isLeft) {
    if (root.left === null && root.right === null) {
      if (isLeft) {
        ret += root.val;
      }
    }

    root.left && dfs(root.left, true);
    root.right && dfs(root.right, false);
  };

  dfs(root, false);
  return ret;
};
