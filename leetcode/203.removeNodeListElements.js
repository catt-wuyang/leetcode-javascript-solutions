/*
 * 203. 移除链表指定元素
 *
 * 描述：给你一个链表的头节点head 和一个整数val ，
 * 删除链表中所有满足 Node.val == val 的节点，并返回新的头节点
 *
 * 示例：
 * 输入：head = [1,2,6,3,4,5,6], val = 6
 * 输出：[1,2,3,4,5]
 *
 * 输入：head = [], val = 1
 * 输出：[]
 *
 */

/**
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/**
 * 解法1 - alpha 头节点占位
 * 链表为了简便，常会在头节点前设置一个空位，使得链表不为空，也就是说最开始 .next 肯定有值
 * alpha=>1=>2=>3=>4
 */
const removeNodeListElements = function (head, val) {
  let alpha = {
    next: head,
  };
  let p = alpha;
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return alpha.next;
};

/**
 * 解法2 - 递归
 * 首先判断如果链表为空，则直接返回该链表
 * 链表非空时，利用递归循环反复印证该链表的 next 直到判断到链表末尾为止，即进入 head === null 逻辑
 * 如果 head.val 值等于给定值，就直接跳过当前值，否则还是返回自身，接着印证
 */
const removeNodeListElementsBetter = function (head, val) {
  if (head === null) {
    return head;
  }

  head.next = removeNodeListElementsBetter(head.next, val);
  return head.val === val ? head.next : head;
};
