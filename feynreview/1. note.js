/**
 * Monday, June, 13
 * 1. 数组和链表的概念、区别
 * 2. 链表的实现
 * 3. leetcode 1.两数之和 203.删除链表指定元素
 */

/**
 * 数组：元素是有序的，可以通过索引 arr[2] 随机访问
 * 链表：元素是无序的，不能随机访问，要想查找某个值，必须从链表的第一个节点开始一个个查找
 * 区别：是否有序，各自有各自的特点，使用时如果查找的较多使用数组，如果增删操作较多用链表，性能更好
 */

/**
 * 链表实现
 * 形式：1=>2=>3=>4
 * 最小单元：节点，有两个属性，一个值val，一个指向next
 * 链表有一个属性：头节点head，两个方法 append 插入，print 打印
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(val) {
    const node = new Node(val);
    let p = this.head;
    if (this.head) {
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      this.head = node;
    }
    this.length++;
  }

  print() {
    let p = this.head;
    let ret = "";
    if (this.head) {
      do {
        ret += `${p.val}=>`;
        p = p.next;
      } while (p.next);
      ret += p.val;
      console.log(ret);
    } else {
      console.log("empty");
    }
  }
}

const nodeList = new LinkNodeList();

nodeList.append(1);
nodeList.append(2);
nodeList.append(3);
nodeList.append(4);

console.log(nodeList.print());
console.log(nodeList.length);

/**
 * leetcode 1.两数之和
 */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

twoSum([2, 7, 11, 15, 4], 18); // [1, 2]

const twoSumBetter = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let n = target - num;
    if (num in obj) {
      return [obj[num], i];
    } else {
      obj[n] = i;
    }
  }
};

twoSumBetter([2, 7, 11, 15, 4], 18);

/**
 * leetcode 203.删除链表指定元素
 */
const removeNodeListElements = function (head, val) {
  if (head === null) {
    return head;
  }

  head.next = removeNodeListElements(head.next, val);
  return head.val === val ? head.next : head;
};

removeNodeListElements([1, 2, 4, 5, 6, 4, 7], 4); // [1,2,5,6,7]

const removeNodeListElementsBetter = function (head, val) {
  let alpha = {
    // val: "",
    next: head,
  };

  let p = alpha;
  while (p.next) {
    // this not clear here
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return alpha.next;
};
