/**
 * 897.展开二叉搜索树，使其为顺序递增搜索树
 *
 * 描述：给定一个二叉搜索树的根节点root，按中序遍历重新排列成递增顺序的搜索树
 * 没有左子节点，只有一个右子节点
 *
 * 示例：
 * 输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 */

/**
 * 对给定的二叉树中序遍历，获得一个顺序递增的数组
 * 遍历数组，填充一棵新树的右子节点，最后返回新树的右节点
 * 最后填充新树的右子节点，有点类似链表创建哨兵节点
 */
const expendBST = function (root) {
  let ret = [];
  const dfs = function (root) {
    if (root === null) return root;
    root.left && dfs(root.left);
    ret.push(root.val);
    root.right && dfs(root.right);
  };
  dfs(root);

  let alphaRoot = new TreeNode();
  let node = alphaRoot;
  for (let value of ret) {
    node.right = new TreeNode(value);
    node = node.right;
  }
  return alphaRoot.right;
};

const linkNodeFormula = function (head) {
  let alpha = {
    next: head,
  };
  let p = alpha;
  while (p) {
    p = p.next;
  }
  return alpha.next;
};

/**
 * 不创建额外数组的解法，中序遍历树的同时，修改当前二叉搜索树
 * 直接让其变成递增顺序的搜索树
 */
const expendBSTBetter = function (root) {
  const alphaRoot = new TreeNode(-1);
  let cur = alphaRoot;
  const dfs = function (root) {
    if (root === null) return;
    root.left && dfs(root.left);

    // modify the node of current tree directly
    cur.right = root;
    root.left = null; // 防止树成环
    cur = root;

    root.right && dfs(root.right);
  };
  dfs(root);
  return alphaRoot.right;
};
