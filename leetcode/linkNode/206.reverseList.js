/**
 * 206.反转链表
 *
 * 描述：给定单链表的头节点 head，请反转链表，并返回
 *
 * 示例：
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 *
 * 输入：[]
 * 输出：[]
 *
 * 输入：[2]
 * 输出：[2]
 */

/**
 * 反转链表常用解法
 *
 * 先判断如果头节点为空，或仅有一个元素，直接返回头节点
 * 定义为空的头节点 prev 、当前节点 cur、cur.next 为 next，移动 cur 遍历链表
 * 进行反转逻辑
 * 1. 当前节点的 next 指向 prev，让指向反转
 * 2. prev 设置成 cur
 * 3. cur 设置成 next
 * 最终返回头节点，即反转后的链表
 */
const reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
