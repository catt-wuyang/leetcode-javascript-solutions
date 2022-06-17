/**
 * 19.删除链表的倒数第 N 个节点
 *
 * 描述：给定一个链表，删除链表的倒数第 N 个节点，并返回链表的头节点
 *
 * 示例：
 * 输入：head = [1, 2, 3, 4, 5] n = 2
 * 输出：[1, 2, 3, 5]
 *
 * 输入：head = [1] n = 1
 * 输出：[]
 */

/**
 * 笨方法 - 先反转链表，再删除对应的第 n 个节点，再次反转链表
 */
const removeNthFromEnd = function (head, n) {
  if (!head) return head;
  if (!head.next) return null;

  // 反转链表
  const reverseList = function (head) {
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

  let reverseHead = reverseList(head);

  // 删除链表第 n 个节点
  let num = 1;
  let alpha = {
    next: reverseHead,
  };
  let p = alpha;
  while (p.next) {
    if (num === n) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
    num++;
  }
  return reverseList(alpha.next);
};

/**
 * 双指针 - 快慢指针
 *
 * 先定义哨兵节点，确保给定的头节点 head.next 不为空，不用判断特殊情况了
 * 定义快慢指针，先让 fast 走到 n 节点位置，到了之后再 slow fast 指针一起走
 * 当 fast 走到链表末尾时，slow 恰好走到链表倒数第 n 节点的位置，再删掉可以了
 */
const removeNthFromEndBetter = function (head, n) {
  let alpha = {
    next: head,
  };

  let slow = alpha;
  let fast = alpha;

  while (n--) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return alpha.next;
};
