/**
 * 83. 删除链表中重复的元素
 *
 * 描述：给定一个已排序的链表的头head，删除所有重复的元素，使每个元素只出现一次
 * 并返回已排序的链表
 *
 * 示例：
 * 输入：head=[1, 1, 2]
 * 输出：[1, 2]
 *
 * 输入：head=[1, 1, 2, 3, 3]
 * 输出：[1, 2, 3]
 */

/**
 * 首先判断链表是否为空，直接返回空链表
 * while 遍历链表的下一个节点，如果当前节点值等于下一个节点值，就直接删掉该节点
 * 题目中提到链表已排序，未排序就不适用了
 */
const deleteDuplicates = function (head) {
  if (head === null) {
    return head;
  }

  let p = head;
  while (p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};

deleteDuplicates([1, 1, 2, 3, 3]); // [1, 2, 3]
