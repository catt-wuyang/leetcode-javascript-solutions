/**
 * 102.二叉树的层序遍历
 *
 * 描述：给定一个二叉树的根节点 root，返回二叉树的层序遍历
 * 逐层，从左至右访问所有节点
 *
 * 示例：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 */

/**
 * BFS 广度优先遍历 - 队列
 *
 * 利用队列数据结构的特性，先进先出，len 来存储每一层的所有节点数
 * 下层节点全部进队列时，上层节点全部出队列
 * 通过第一层根节点，找到第二层所有节点，以此类推直到最后一层
 * queue.shift() 当前层出队列
 * queue.push(node.left)、queue.push(node.right) 下层入队列
 */
const levelorderTraversal = function (root) {
  let ret = [];
  if (root === null) return ret;

  let queue = [];
  queue.push(root);

  while (queue.length) {
    let len = queue.length;
    let curLevel = [];
    while (len > 0) {
      let node = queue.shift();
      curLevel.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
    ret.push(curLevel);
  }
  return ret;
};

/**
 * dfs 相似写法
 */
const levelorderTraversalBetter = function (root) {
  let ret = [];
  const bfs = function (root, depth) {
    if (root === null) return;
    if (!ret[depth]) {
      ret[depth] = [];
    }

    bfs(root.left, depth + 1);
    ret[depth].push(root.val);
    bfs(root.right, depth + 1);
  };

  bfs(root, 0);
  return ret;
};
