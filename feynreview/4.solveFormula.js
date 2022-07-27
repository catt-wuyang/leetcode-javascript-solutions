/**
 * 解题公式
 */

/**
 * 二分查找
 * 左右指针
 */
const binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      right = mid - 1;
    }
  }
  return left;
};

/**
 * 双指针 - 快慢指针
 */
const twoPointerFS = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
};

/**
 * 双指针 - 左右指针
 */

const twoPointerLR = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    left++;
    right--;
  }
};

/**
 * 链表的遍历
 */
const linkNodeTraversal = function (head) {
  if (head === null) return head;

  let ret = [];
  let p = head;
  while (p.next) {
    ret.push(p.val);
    p = p.next;
  }
  return head;
};

/**
 * 链表的遍历
 * 设置哨兵节点，简化链表头节点的判断
 */
const linkNodeTraversalAlpha = function (head) {
  let alpha = {
    next: null,
  };

  let p = alpha;
  while (p.next) {
    p = p.next;
  }
  return alpha.next;
};

/**
 * 二叉树的前中后序遍历
 * DFS 深度优先遍历 + 递归
 */
const treeNodeTraversalDFS = function (root) {
  let ret = [];
  const dfs = function (root) {
    if (root === null) return;

    dfs(root.left); // 递归遍历左子树
    ret.push(root.val); // 当前节点值处理
    dfs(root.right); // 递归遍历右子树
  };

  dfs(root);
  return ret;
};

/**
 * 二叉树的层序遍历
 *
 * BFS 广度优先遍历 + 栈/队列
 */
const treeNodeTraversalBFS = function (root) {
  let ret = [];
  if (root === null) return ret;

  let queue = [root]; // 利用队列先进先出的特性，达到存储当前层所有节点的目的，也可以用栈先进后出的特性，具体看需求
  while (queue.length) {
    let len = queue.length; // 当前层所有节点的数量
    let curLevel = []; // 当前层所有节点值
    // 即可以使用 while 也可以用 for 灵活选择
    while (len > 0) {
      let node = queue.shift(); // 从队列中推出节点值
      curLevel.push(node.val); // 填充进存储当前层节点值的数组

      node.left && queue.push(node.left); // 遍历左子树
      node.right && queue.push(node.right); // 遍历右子树
      len--;
    }
    ret.push(curLevel); // 返回值是二维数组，每个元素是每层所有节点值
  }
  return ret;
};
