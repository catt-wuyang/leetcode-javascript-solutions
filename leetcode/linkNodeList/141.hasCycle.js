/**
 * 141. 环形链表
 *
 * 描述：给定一个链表的头节点head，判断链表中是否有环
 * 如果链表中存在环，则返回 true，否则，返回 false
 *
 * 示例：
 * 输入：head=[3,2,0,-4], pos = 1
 * 输出：true
 *
 * 输入：head=[1,2], pos = 0
 * 输出：true
 *
 * 输入：head=[1], pos = -1
 * 输出：false
 */

/**
 * 设置一个缓存集合，遍历链表；
 * 如果 cache 里再一次出现 head 那说明是环形链表，否则将 head 添加到缓存集合中
 */
const hasCycle = function (head) {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return true;
    } else {
      cache.add(head);
    }
    head = head.next;
  }
  return false;
};

/**
 * 快慢双指针，套圈思想
 * 只要是环形链表，双指针肯定会套圈，反推用是否套圈来判断链表是否是环形的
 */

const hasCycleBetter = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
};
