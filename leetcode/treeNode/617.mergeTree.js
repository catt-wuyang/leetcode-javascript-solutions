/**
 * 617.合并二叉树
 *
 * 描述：给定两棵二叉树 root1 和 root2，根据节点覆盖的规则合并成一棵二叉树
 *
 * 示例：
 * 输入：root1 = [1,3,2,5] root2 = [2,1,3,null,4,null,7]
 * 输出：[3,4,5,5,4,null,7]
 */

const mergeTree = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;

  let ret = new TreeNode(root1.val + root2.val);
  ret.left = mergeTree(root1.left, root2.left);
  ret.right = mergeTree(root1.right, root2.right);

  return ret;
};
