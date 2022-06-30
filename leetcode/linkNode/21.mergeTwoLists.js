/**
 * 21.合并两个有序链表
 *
 * 描述：给定两个升序的链表，请合并拼接两个链表成一个新链表，并返回升序后的新链表
 *
 * 示例：
 * 输入：list1 = [1,2,4] list2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 *
 * 输入：list1 = [] list2 = []
 * 输出：[]
 */

/**
 * 创建一个新链表 alpha，遍历两个链表 list1 和 list2
 * 对比 list1 和 list2 的值，将小的拼接到 alpha.next
 * 同时，p 不断的后移遍历链表，最后返回新链表的 next
 */
const mergeTwoLists = function (list1, list2) {
  let alpha = {
    next: null,
  };

  let p = alpha;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      p.next = list1;
      list1 = list1.next;
    } else {
      p.next = list2;
      list2 = list2.next;
    }
    p = p.next;
  }
  return alpha.next;
};
