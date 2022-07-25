/**
 * 429.N叉树的层序遍历
 *
 * 描述：给定一个N叉树，返回所有节点的层序遍历
 *
 * 示例：
 * 输入：root = [1,null,3,2,4,null,5,6]
 * 输出：[[1],[3,2,4],[5,6]]
 */
const nLevelorderTraversal = function (root) {
  let ret = [];
  if (root === null) return ret;

  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let curLevel = [];
    while (len--) {
      let node = queue.shift();
      curLevel.push(node.val);
      // 遍历 node.children 入队列
      node.children.forEach((child) => {
        child && queue.push(child);
      });
    }
    ret.push(curLevel);
  }

  return ret;
};
