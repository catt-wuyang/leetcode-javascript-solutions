/**
 * 701.二叉搜索树中的插入值
 *
 * 描述：给定一个二叉搜索树的根节点root，和要插入的值val
 * 要将值插入到二叉搜索树中，插入的节点位置不唯一，
 * 但要保证插入后，仍是二叉搜索树，返回插入值后的二叉搜索树的根节点
 *
 * 示例：
 * 输入：root = [4,2,7,1,3] val = 5
 * 输出：[4,2,7,1,3,5]
 */
const insertIntoBST = function (root, val) {
  if (root === null) {
    return new TreeNode(val);
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
