/**
 * 114.二叉树展开为链表
 *
 * 描述：给定一个二叉树的根节点root，请展开为链表
 * 要求展开后的单链表与二叉树的前序遍历顺序相同
 * 用树的右节点作为链表下一个指针，左节点指针始终为null
 *
 * 示例：
 * 输入：root = [1,2,5,3,4,null,6]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
 */

/**
 * 前序遍历二叉树，节点值存放到list数组中
 * 遍历list形成单链表，左子树为null，右子树为list元素
 */
const flatten = function (root) {
  let list = [];
  const dfs = function (root) {
    if (root === null) return;
    list.push(root);
    root.left && dfs(root.left);
    root.right && dfs(root.right);
  };
  dfs(root);

  // list = [[1,2,5,3,4,null,6], [2,3,4], [3], [4], [5,null,6], [6]]
  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1];
    const cur = list[i];
    prev.left = null;
    prev.right = cur;
  }
  return list;
};

/**
 * 原地修改
 * 观察发现二叉树展平成单链表
 * 1. 根节点不变
 * 2. 根节点的左子树都放到右子树上
 * 3. 根节点的右子树，接到左子树展平结果的后面
 */
const flattenBetter = function (root) {
  const dfs = function (root) {
    if (root === null) return root;

    dfs(root.left);
    dfs(root.right);

    // 存储左右子树的值
    let left = root.left;
    let right = root.right;

    // 左子树设置为 null，右子树为左子树，都缕到右边去
    root.left = null;
    root.right = left;

    // 遍历右子树所有节点，将右子树的节点，接到现有右子树的尾部
    while (root.right !== null) {
      root = root.right;
    }
    root.right = right;
  };
  dfs(root);
  return root;
};
