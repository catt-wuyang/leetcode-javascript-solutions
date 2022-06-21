/*
 * 142.环形链表II
 *
 * 描述：给定一个链表的头节点 head，返回链表开始进入环形的第一个头节点
 * 如果链表无环，则返回 null
 *
 * 示例：
 * 输入：head = [3,2,0,-4] pos = 1
 * 输出：[2]
 *
 * 输入：head = [1,2] pos = 0
 * 输出：[1]
 *
 * 输入：head = [1] pos = -1
 * 输出：null
 */

/**
 * 利用哈希表，记录遍历链表中每个节点，如果遇到之前遍历过的节点，就说明链表中有环
 * 其他方法是找公式规律，但没太理解
 */
const detectCycle = function (head) {
  if (!head) {
    return null;
  }

  let visited = new Set();
  let p = head;
  while (p.next) {
    if (visited.has(p)) {
      return p;
    }

    visited.add(p);
    p = p.next;
  }
  return null;
};

const detectCycleBetter = function (head) {
  let visited = new Set();
  while (head !== null) {
    if (visited.has(head)) {
      return head;
    }

    visited.add(head);
    head = head.next;
  }
  return null;
};
