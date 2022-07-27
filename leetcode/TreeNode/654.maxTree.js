/**
 * 654.最大二叉树
 *
 * 描述：给定一个整数数组nums，无重复元素，构建一个最大二叉树
 * 递归逻辑：
 * 1.找数组中的最大值最为当前的根节点
 * 2.根据最大值，切片左数组、右数组
 * 3.再依次递归切片数组的最大值，作为上一个根节点的左右子树
 *
 * 示例：
 * 输入：nums = [3,2,1,6,0,5]
 * 输出：[6,3,5,null,2,0,null,null,1]
 * 最大值6，左数组[3,2,1]，右数组[0,5] - 根节点6
 * 左数组[3,2,1]，最大值3，左数组[]，右数组[2,1] - 根节点6的左子树3
 * ...
 * 右数组[0,5]，最大值5，左数组[0]，右数组[] - 根节点6的右子树5
 * ...
 *
 */
const constructMaxTree = function (nums) {
  if (!nums.length) return null;

  let max = Math.max(...nums);
  let index = nums.indexOf(max);
  let root = new TreeNode(max);
  root.left = constructMaxTree(nums.slice(0, index));
  root.right = constructMaxTree(nums.slice(index + 1));
  return root;
};

/**
 * 优化
 */
const getMax = function (nums) {
  if (!nums.length) return;
  let max = nums[0];
  let k = nums.length - 1;
  while (k >= 0) {
    max = Math.max(max, nums[k]);
    k--;
  }
  return max;
};

const constructMaxTreeBetter = function (nums) {
  if (!nums.length) return null;

  let max = getMax(nums);
  let index = nums.indexOf(max);
  let root = new TreeNode(max);
  root.left = constructMaxTree(nums.slice(0, index));
  root.right = constructMaxTree(nums.slice(index + 1));
  return root;
};
