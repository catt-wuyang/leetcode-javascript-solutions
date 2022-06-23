/**
 * 二叉树常见问题
 * 利用递归解法，找出字问题的解法，再找到终止条件
 */

/**
 * 二叉树所有节点加1
 *
 * 递归，一般对左树和右树；终止条件，root === null；操作，值 val + 1
 */
const plusTreeNode = function (root) {
  if (root === null) {
    return false;
  }

  root.val += 1;

  plusTreeNode(root.left);
  plusTreeNode(root.right);
};

/**
 * 判断两棵二叉树是否相同
 */
const isSameTree = function (root1, root2) {
  if (root1 === null && root2 === null) return true;

  if (root1 === null || root2 === null) return false;
  if (root1.val !== root2.val) return false;

  return (
    isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  );
};
