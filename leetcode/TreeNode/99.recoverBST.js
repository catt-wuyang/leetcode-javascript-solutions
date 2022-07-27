/**
 * 99.恢复二叉搜索树
 *
 * 描述：给定一个二叉搜索树的根节点root，但是恰好有两个节点的位置是错误的
 * 请找到这两个错误的节点，并恢复它使其满足二叉搜索树的特性
 *
 * 示例：
 * 输入：root = [3,1,4,null,null,2]
 * 输出：[2,1,4,null,null,3]
 */

/**
 * 遇到二叉搜索树，首先可以考虑对其进行中序遍历后
 * 数组是单调增的，如果有破坏其单调性的节点则发生了错误
 */
const recoverBST = function (root) {
  let cur = new TreeNode(-Number.MAX_VALUE);
  let node1 = null;
  let node2 = null;

  const dfs = function (root) {
    if (root == null) return;
    root.left && dfs(root.left);

    if (cur.val >= root.val && node1 == null) {
      node1 = cur; // 找到第一个错误节点，赋值cur
    }
    if (cur.val >= root.val && node1 != null) {
      node2 = root; // 找到第二个错误节点，赋值root
    }
    cur = root;
    root.right && dfs(root.right);
  };

  dfs(root);
  [node1.val, node2.val] = [node2.val, node1.val];
};

/**
 * 先二叉树中序遍历，填充数组 arr
 */
const recoverBSTArr = function (root) {
  let arr = [];
  let node1 = null;
  let node2 = null;

  const dfs = function (root) {
    if (root === null) return;
    root.left && dfs(root.left);
    arr.push(root);
    root.right && dfs(root.right);
  };

  dfs(root);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].val >= arr[i + 1].val) {
      // 单调增特性就被破坏了，错误节点出现了
      if (node1 === null) {
        node1 = arr[i];
      }

      if (node1 !== null) {
        node2 = arr[i + 1];
      }
    }
  }

  [node1.val, node2.val] = [node2.val, node1.val];
};
