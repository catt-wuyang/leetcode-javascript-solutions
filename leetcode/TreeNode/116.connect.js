/**
 * 116.完美二叉树填充每个节点的下一个右侧节点指针
 *
 * 描述：给定一个完美二叉树，每个父节点都有左右子节点，
 * 叶子节点都在同一层，饱满二叉树
 * 要求填充它的每个next指针，让其指向下一个右侧节点
 *
 * 示例：
 * 输入：root = [1,2,3,4,5,6,7]
 * 输出：[1,#,2,3,#,4,5,6,7,#]
 */

/**
 * len 表示每一层所有节点数
 * len > 0时，表示当前层还没遍历完，队列中仍然有值
 * 要想2指向3 只要 node.next = queue[0] 即可
 * 因为 2 出队列了等于 node，3 还在队列里始终是队列的第一个元素，即 queue[0]
 */
const connect = function (root) {
  if (root === null) return root;

  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      let node = queue.shift();
      node.next = len > 0 ? queue[0] : null;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};
