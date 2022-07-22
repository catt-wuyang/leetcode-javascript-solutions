/**
 * 237.删除链表中的节点
 *
 * 描述：有一个单链表，不能访问头节点head，只能访问要删除的节点node
 * 返回删除指定节点node后的链表
 *
 * 示例：
 * 输入：head = [4,1,5,9] node = 5
 * 输出：[4,1,9]
 */

/**
 * 删除链表节点，常规解法是
 * a => b => c
 * 要删除节点b，那先找到b的上一个节点a，让a.next指向c 就可以把节点b给删掉了
 *
 * 巧妙的运用值等删除节点
 * 4->1->5->9
 * 4->1->1->9
 * 4->1->9
 */
const deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
