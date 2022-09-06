/**
 * 384.洗牌算法
 *
 * 给定一个整数数组nums，设计一个洗牌算法，返回数组随机打乱后的结果
 *
 * 示例：
 * 输入：["Solution", "shuffle", "reset", "shuffle"]
        [[[1, 2, 3]], [], [], []]
 * 输出：[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
 *
 */

/**
 * 思路：依次从 [0,n-1] [1,n-1] [2,n-1] 范围中随机取一个数，跟nums[i]交换位置
 * 实现等概率且高效的洗牌算法
 */
const shuffle = function (nums) {
  let res = nums.slice(0);
  let n = res.length;
  for (let i = 0; i < n; i++) {
    let rand = helper(i, n - 1);
    let temp = ret[i];
    ret[i] = ret[rand];
    ret[rand] = temp;
  }
  return res;

  function helper(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
  }
};
