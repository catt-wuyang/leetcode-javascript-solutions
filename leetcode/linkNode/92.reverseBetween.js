/**
 * 92.反转链表中指定的区间节点
 *
 * 描述：给定一个单链表的头节点 head，需要返回链表中从位置 left 到 right 链表节点，并反转
 *
 * 示例：
 * 输入：head = [1,2,3,4,5] left = 2 right = 4
 * 输出：[1,4,3,2,5] 2到4节点为[2,3,4] 反转之后为[4,3,2]
 *
 * 输入：head = [5] left = 1 right = 1
 * 输出：[5] 临界情况，反转后还是自身
 */

/**
 * cur 待反转区域的第一个节点
 * next cur.next 对应 cur 的下一个节点
 * prev 待反转区域的第一个节点，还是 left 的前一个节点
 * 例如 [1, [2,3,4], 5] cur = 2  next = 3 prev = 1
 * left=2 right=4
 *
 * 先设置哨兵节点，不用考虑头节点特殊性
 * 遍历反转区域之前的节点
 * 再遍历反转区域，让 cur 下一个节点都移动到反转区域的最前面，直至区域内最后一个节点
 * 反转完，返回 alpha.next
 */
const reverseBetween = function (head, left, right) {
  let alpha = {
    next: head,
  };

  let p = alpha;
  for (let i = 0; i < left - 1; i++) {
    p = p.next;
  }

  let prev = p.next;
  let cur = prev.next;

  for (let i = 0; i < right - left; i++) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  p.next.next = cur;
  p.next = prev;

  // 等价于
  // let cur = prev.next;
  // for (let i = 0; i < right - left; i++) {
  //   let next = cur.next;
  //   cur.next = next.next;
  //   next.next = prev.next;
  //   prev.next = next;
  // }

  return alpha.next;
};
