/**
 * 160.相交链表
 *
 * 描述：给定两个单链表的头节点 headA 和 headB，找出两个单链表相交的起始节点，并返回
 * 如果不存在相交节点，则返回 null
 *
 * 示例：
 * 输入：headA = [1, 2, 3, 4, 5], headB = [6, 7, 4, 5]
 * 输出：4  [4, 5] 是两个链表的相交部分，4 是相交部分的头节点
 */

/**
 * 因为两个链表相交处之前的长度，不一定相同，所以不好控制循环遍历
 * 转变思路解法，拼接两个链表
 * headA 拼接 headB [1,2,3,4,5,6,7,4,5]
 * headB 拼接 headA [6,7,4,5,1,2,3,4,5]
 * 此时就能得到两个长度相同，且相交部分都在链表末尾处，相对很好判断了
 */

/**
 * curA 和 curB 表示上述拼接的两个新链表，当 curA 的节点不等于 curB 时遍历
 * 相等时表示找到了相交节点，停止遍历，返回 curA 即可
 * 如果 curA 即 headA 遍历完了，开始遍历 headB
 * 如果 curB 即 headB 遍历完了，开始遍历 headA
 */
const getIntersectionNode = function (headA, headB) {
  let curA = headA;
  let curB = headB;

  while (curA !== curB) {
    curA = curA === null ? headB : curA.next;
    curB = curB === null ? headA : curB.next;
  }

  // 便于理解
  // while(curA !== curB) {
  //   if (curA === null) {
  //       curA = headB
  //   } else {
  //       curA = curA.next
  //   }

  //   if (curB === null) {
  //       curB = headA
  //   } else {
  //       curB = curB.next
  //   }
  // }

  return curA;
};
