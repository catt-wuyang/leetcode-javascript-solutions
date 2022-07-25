/**
 * 515.二叉树每层的最大值
 *
 * 描述：给定一个二叉树的根节点root，找到并返回每层中最大值所组成的数组
 *
 * 示例：
 * 输入：root = [1,3,2,5,3,null,9]
 * 输出：[1,3,9]
 */

/**
 * 套公式的解法，注意因为节点值可能为负数，
 * 所以在 max 的默认值设置为 -Number.MAX_VALUE
 */
const levelLargestValue = function (root) {
  let ret = [];
  if (root === null) return ret;

  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let max = queue[0].val;
    while (len--) {
      let node = queue.shift();
      max = Math.max(max, node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ret.push(max);
  }
  return ret;
};
