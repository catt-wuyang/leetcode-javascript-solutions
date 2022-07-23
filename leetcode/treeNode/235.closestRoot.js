/**
 * 235.二叉搜索树最近的公共根节点
 *
 * 描述：给定一个二叉搜索树root，还有两个指定的节点 p，q
 * 找到并返回两个节点最近的公共祖先
 *
 * “节点最近的公共祖先”的概念是，两个节点 p，q 有且仅有一个节点 x
 * 满足x是p q 的公共祖先，且 x 深度尽可能大，有时一个节点也可以是它自己的祖先
 *
 * 示例：
 * 输入：root = [6,2,8,0,4,7,9,null,3,5] p = 2 q = 8
 * 输出：6
 */
const closestRoot = function (root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      break;
    }
  }
  return root;
};
