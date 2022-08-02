/**
 * 111.二叉树的最小深度
 *
 * 描述：给定一个二叉树的根节点 root，找出其最小的深度并返回
 * 二叉树的最小深度：从根节点到最近的叶子节点，最短路径上的所有节点数
 *
 * 示例：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
 */

/**
 * 递归
 */
const minDepth = function (root) {
  // 无根节点，最小深度 0
  if (root === null) {
    return 0;
  }
  // 仅有根节点，最小深度 1
  if (root.left === null && root.right === null) {
    return 1;
  }
  // 无左子树，递归遍历右子树 + 根节点
  if (root.left === null) {
    return minDepth(root.right) + 1;
  }
  // 无右子树，递归遍历左子树 + 根节点
  if (root.right === null) {
    return minDepth(root.left) + 1;
  }
  // 有左右子树，递归遍历左右子树 + 根节点
  if (root.left && root.right) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }
};

/**
 * 队列
 */
const minDepthBetter = function (root) {
  if (root === null) return 0;

  let queue = [root];
  let depth = 1;
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      let node = queue.shift();
      if (node.left === null && node.right === null) {
        return depth;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    depth++;
  }
  return root;
};
