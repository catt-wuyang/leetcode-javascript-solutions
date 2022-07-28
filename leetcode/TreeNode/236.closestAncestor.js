/**
 * 236.二叉树最近的祖先节点
 *
 * 描述：给定一个二叉树root，还有两个指定的节点 p，q
 * 找到并返回两个节点最近的祖先
 *
 * “节点最近的公共祖先”的概念是，两个节点 p，q 有且仅有一个节点 x
 * 满足x是p q 的公共祖先，且 x 深度尽可能大，有时一个节点也可以是它自己的祖先
 *
 * 示例：
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4] p = 5 q = 1
 * 输出：3
 */

/**
 * 整体思路是，后序遍历二叉树，带着两个指定节点 p,q
 * 再不断的往根节点找，如果满足某个节点等于p，某个节点等于q
 * 它们最近的节点就是要找的祖先
 *
 * 细致分析，根节点root p q 的关系，可能有两种情况
 * 1.p q 位于最近祖先的左右节点上即两侧
 * 2.p q 位于最近祖先的一侧
 */
const closestAncestor = function (root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root; // 如果 p q 是根节点就直接返回root，不用查了

  let left = closestAncestor(root.left, p, q);
  let right = closestAncestor(root.right, p, q);

  if (left && right) return root;
  if (left === null) return right;
  if (right === null) return left;
};
