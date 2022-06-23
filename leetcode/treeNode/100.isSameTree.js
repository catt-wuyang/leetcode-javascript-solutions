/**
 * 100.相同的二叉树
 *
 * 描述：给定两棵二叉树的根节点 p 和 q，
 * 检验这两棵树是否相同，如果结构相同，且节点具有相同的值，则认为他们相同
 *
 * 示例：
 * 输入：p = [1,2,3] q = [1,2,3]
 * 输出：true
 *
 * 输入：p = [1,2] q = [1,null,2]
 * 输出：false
 */

/**
 * 递归解法，遍历左右子树
 * 如果两棵树节点都为 null 则是相同的树
 * 如果其中一棵树节点为 null 另一棵不是 null，或者两棵树节点值不相等，则都不是相同的树
 */
const isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
