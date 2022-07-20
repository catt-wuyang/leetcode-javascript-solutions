/**
 * 234.验证回文链表
 *
 * 描述：给定一个单链表的头节点 head，判断该链表是否为回文链表
 * 是返回 true，否返回 false
 *
 * 示例：
 * 输入：head = [1,2,2,1]
 * 输出：true
 *
 * 输入：head = [1,2]
 * 输出：false
 */

/**
 * 双指针 - 左右指针
 *
 * 链表想不明白，转成数组用之前左右指针的思路
 */
const isPalindrome = function (head) {
  let nums = [];
  while (head !== null) {
    nums.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] !== nums[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

/**
 * 双指针 - 快慢指针
 *
 * 链表的思路解题，定义快慢指针，先遍历一遍链表
 * 慢指针每次走一，快指针每次走二，遍历完后，
 * 奇数时慢指针停在中间位置，偶数时慢指针停在中间位置后一位
 * 找到慢指针的中间位置时，由此位置断开链表
 * 反转后半段的链表，和前半段链表比较，相同则判定为回文链表
 *
 * 涉及：
 * 1.快慢指针遍历链表
 * 2.断开链表
 * 3.反转链表
 * 4.对比两个链表是否相同
 */
const isPalindromeII = function (head) {
  if (head === null || head.next === null) return true;

  let slow = head;
  let fast = head;
  let prev;
  // 1.快慢指针遍历链表
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // 2.断开链表
  prev.next = null;
  // 3.反转链表
  let head2 = null;
  while (slow) {
    let next = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = next;
  }

  // 4.对比两个链表是否相同
  while (head && head2) {
    if (head.val !== head2.val) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }
  return true;
};

/**
 * 解法二 - 精简版
 */
const isPalindromeBetter = function (head) {
  let slow = head;
  let fast = head;

  let prev;
  while (fast && fast.next) {
    fast = fast.next.next;
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (prev && slow) {
    if (prev.val !== slow.val) {
      return false;
    }
    prev = prev.next;
    slow = slow.next;
  }
  return true;
};
