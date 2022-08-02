/**
 * 538.二叉搜索树转换为累加树
 *
 * 描述：给定一个二叉搜索树的根节点root，请将每个节点值做累加，并更新当前二叉搜索树
 * 确保每个节点的新值等于原树中大于或等于该值之和
 *
 * 示例：
 * 输入：root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
 * 输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
 */
const cumulateSumBST = function (root) {
  let sum = 0;
  const dfs = function (root) {
    if (root === null) return;
    dfs(root.right);
    sum += root.val;
    root.val = sum;
    dfs(root.left);
  };
  dfs(root);
  return root;
};

/**
 * 栈
 */
const cumulateSumBSStack = function (root) {
  let sum = 0;
  let stack = [];
  let cur = root;

  while (cur) {
    stack.push(cur);
    cur = cur.right;
  }

  while (stack.length) {
    cur = stack.pop();
    sum += cur.val;
    cur.val = sum;
    cur = cur.left;
    while (cur) {
      stack.push(cur);
      cur = cur.right;
    }
  }

  return root;
};
