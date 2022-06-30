/**
 * 876.链表的中间节点
 *
 * 描述：给定一个链表的头节点 head，非空，返回链表的中间节点
 *
 * 示例：
 * 输入：[1, 2, 3, 4, 5]
 * 输出：[3, 4, 5]
 */

/**
 * 定义快慢指针，slow 每次移动一步，fast 每次移动两步
 * 当 fast 移动到链表末尾时，slow 恰好移动到链表中间节点处，直接返回 slow 即可
 */
const middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
