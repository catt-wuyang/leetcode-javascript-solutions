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
const flatten = function (root) {
  let list = [];
  const dfs = function (root) {
    if (root === null) return;
    list.push(root);
    root.left && dfs(root.left);
    root.right && dfs(root.right);
  };
  dfs(root, list);

  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1];
    const cur = list[i];
    prev.left = null;
    prev.right = cur;
  }
  return list;
};
