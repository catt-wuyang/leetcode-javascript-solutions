/**
 * 109.有序的链表转换成二叉搜索树
 *
 * 描述：给定一个升序的单链表头节点head，将其转换成高度平衡的二叉搜索树
 *
 * 示例：
 * 输入：head = [-10,-3,0,-5,9]
 * 输出：[0,-3,9,-10,null,5]
 */

/**
 * 容懂解法：
 *
 * 链表 - 数组 - 树，利用 leetcode 108 的解法
 */
const arrayToBST = function (nums) {
  if (!nums.length) return null;
  const mid = nums.length >> 1;
  const root = new TreeNode(nums[mid]);
  root.left = arrayToBST(nums.slice(0, mid));
  root.right = arrayToBST(nums.slice(mid + 1));
  return root;
};

const linkNodeToBST = function (head) {
  let nums = [];
  let p = head;
  while (p) {
    nums.push(p.val);
    p = p.next;
  }
  return arrayToBST(nums);
};

/**
 * 链表 - 树
 *
 * 根据数组转换树的思想，找链表的中间节点，作为二叉搜索树的根节点
 * 快慢指针找中间节点mid
 */
const linkNodeToBSTBetter = function (head) {
  const dfs = function (head, end) {
    if (head === end) return null;
    let slow = head;
    let fast = head;
    while (fast !== end && fast.next !== end) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let root = new TreeNode(slow.val);
    root.left = dfs(head, slow);
    root.right = dfs(slow.next, end);
    return root;
  };
  return dfs(head, null);
};
