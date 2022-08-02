/**
 * 563.二叉树的坡度
 *
 * 描述：给定一个二叉树的根节点root，计算并返回二叉树的坡度
 * 二叉树的坡度 = 每个节点的坡度的累加和
 * 每个节点的坡度 = ｜左子树所有节点的和 - 右子树所有节点的和｜绝对值
 *
 * 示例：
 * 输入：root = [4,2,9,3,5,null,7]
 * 输出：15
 */
const tiltTree = function (root) {
  let ret = 0;
  const dfs = (node) => {
    if (node === null) return 0;
    const sumLeft = dfs(node.left);
    const sumRight = dfs(node.right);
    ret += Math.abs(sumLeft - sumRight);
    return sumLeft + sumRight + node.val;
  };
  dfs(root);
  return ret;
};
