/**
 * 108.有序的数组转换成二叉搜索树
 *
 * 描述：给定一个升序数组nums，将其转换成高度平衡的二叉搜索树
 *
 * 示例：
 * 输入：nums = [-10,-3,0,5,9]
 * 输出：[0,-3,9,-10,null,5]
 */

/**
 * 根据二叉搜索树的特性，节点左边的值都小于它，节点右边的值都大于它
 * 对二叉搜索树进行中序遍历，就能得到升序的数组nums
 * 现在要逆向转换，可知数组最中间的元素mid是二叉搜索树的根节点
 * 0~mid 是根节点左边节点
 * mid+1~nums[nums.length-1] 是根节点右边节点
 */
const arrayToBST = function (nums) {
  if (!nums.length) return null;

  const mid = nums.length >> 1;
  const root = new TreeNode(nums[mid]);
  root.left = arrayToBST(nums.slice(0, mid));
  root.right = arrayToBST(nums.slice(mid + 1));

  return root;
};
