/**
 * 700.二叉搜索树中的搜索
 *
 * 描述：给定一个二叉搜索树的根节点root，和一个整数val
 * 搜索节点值等于val的节点，并返回以该节点为根节点的子树
 * 如果未找到返回 null
 *
 * 示例：
 * 输入：root = [4,2,7,1,3] val = 2
 * 输出：[2,1,3]
 */
const searchBST = function (root, val) {
  if (root === null) return root;

  if (root.val === val) {
    return root;
  }
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  if (root.val < val) {
    return searchBST(root.right, val);
  }
};
