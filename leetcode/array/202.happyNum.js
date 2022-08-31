/**
 * 202.验证快乐数
 *
 * 给定一个整数n，验证它是否是快乐数
 * 验证规则：每一次计算每位数的平方的累加和，直到最终结果为1
 * 则说明这个数是快乐数，返回true，否则返回false
 *
 * 示例：
 * 输入：n = 19
 * 输出：true
 *
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 */

/**
 * 不是快乐数的整数，在计算每位平方和结果时
 * 必然会产生循环，虽然计算的次数不同
 * 所以每次将结果保留在set中，一旦出现结果不等于1且重复
 * 则该数就不是快乐数，若结果为1，则是快乐数
 */
const happyNum = function (n) {
  let set = new Set();
  let sum = 0;
  let nums = String(n);
  while (sum !== 1) {
    sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i] * nums[i];
    }

    if (set.has(sum)) {
      return false;
    } else {
      set.add(sum);
    }
    nums = String(sum);
  }
  return true;
};
