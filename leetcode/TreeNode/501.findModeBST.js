/**
 * 501.二叉搜索树中的众数
 *
 * 描述：
 *
 * 示例：
 * 输入：
 * 输出：
 */

/**
 * 暴力解法 —— 把题解出来
 *
 * 最先想到的解法是，把树遍历一遍，用map做统计记录每个节点值出现的频率
 * 再找出现频率最高的集合
 *
 * 优化解法1 —— 利用二叉搜索树的特性
 *
 * 既然是二叉搜索树，首先想到它的特性，对其中序遍历后能得到单调增的有序数组
 * 这道题转换成了，在有序数组中找频率最高的数据集合
 *
 * 优化解法2 - 不使用数组，直接在树遍历的时候操作，
 * 且随着频率高的统计更新，重置结果集合
 *
 * 解题思路：
 * 中序遍历二叉搜索树，遍历过程中做处理
 * prev 保存上一个出现且不同的节点值
 * ret 保存出现频次最多的节点值集合
 * 若访问到一个重复的节点值，频次+1
 * 若访问到新的不同节点值，频次重置为1，更新prev
 * 和之前最高频次的maxFreq比较，始终保存最高频次
 */
const findModeBSTBetter = function (root) {
  let ret = [];
  let freq = 0;
  let maxFreq = 0;
  let prev = 0;

  const handle = function (val) {
    if (val === prev) {
      freq++;
    } else {
      freq = 1;
      prev = val;
    }

    if (freq > maxFreq) {
      maxFreq = freq;
      ret = [val];
    } else if (freq === maxFreq) {
      ret.push(val);
    }
  };

  // 二叉搜索树的中序遍历
  const dfs = function (root) {
    if (root === null) return;
    root.left && dfs(root.left);
    handle(root.val);
    root.right && dfs(root.right);
  };

  dfs(root);
  return ret;
};

/**
 * map 解法
 */
const findModeBST = function (root) {
  let map = new Map();
  let maxFreq = 0;

  const dfs = function (root) {
    if (root === null) return;
    root.left && dfs(root.left);
    if (map.has(root.val)) {
      map.set(root.val, map.get(root.val) + 1);
    } else {
      map.set(root.val, 1);
    }
    maxFreq = Math.max(maxFreq, map.get(root.val));
    root.right && dfs(root.right);
  };

  dfs(root);
  return [...map.entries()]
    .filter(([key, value]) => value === maxFreq)
    .map(([key, value]) => key);
};
