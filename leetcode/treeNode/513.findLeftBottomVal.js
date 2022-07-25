/**
 * 513.二叉树左下角的值
 *
 * 描述：给定一个二叉树的根节点 root，找到并返回二叉树最底层最左边的节点
 *
 * 示例：
 * 输入：root = [1,2,3,4,null,5,6,null,null,7]
 * 输出：7
 */

/**
 * BFS 广度优先遍历 + 队列
 *
 * leetcode 199 二叉树的右视图的解题思路类似
 * 先遍历所有右子树节点，再遍历所有左子树节点
 * ret 返回的是二叉树的左视图，找到 ret 的最后一个元素就是左下的值
 */
const findLeftBottomValBFSI = function (root) {
  let ret = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    while (len--) {
      let node = queue.shift();
      if (len === 0) {
        ret.push(node.val);
      }
      node.right && queue.push(node.right);
      node.left && queue.push(node.left);
    }
  }

  return ret[ret.length - 1];
};

/**
 * BFS 广度优先遍历 + 队列优化
 *
 * 遍历顺序先遍历所有右子树节点，再遍历所有左子树节点
 * 所有节点遍历完成后的最后一个值就是二叉树左下的值
 */
const findLeftBottomValBFSII = function (root) {
  let ret = 0;
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    node.right && queue.push(node.right);
    node.left && queue.push(node.left);
    ret = node.val;
  }

  return ret;
};

/**
 * DFS 深度优先搜索
 *
 * depth 记录遍历节点的深度，ret 时刻记录深度在 curDepth 时最左边的值
 * 全部节点遍历完成之后，ret 即是最底层最左边的值
 */
const findLeftBottomValDFS = function (root) {
  let curDepth = 0;
  const dfs = function (root, depth) {
    if (root === null) return;
    depth++;
    dfs(root.left, depth);
    dfs(root.right, depth);
    if (depth > curDepth) {
      curDepth = depth;
      ret = root.val;
    }
  };

  dfs(root, 0);
  return ret;
};
