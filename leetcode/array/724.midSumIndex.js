/**
 * 724.数组中心下标
 *
 * 给定一个整数数组nums，找到一个元素，满足其左边累加和等于右边累加和
 * 找到此元素返回其索引值，未找到返回 -1
 *
 * 示例：
 * 输入：nums = [1, 7, 3, 6, 5, 6]
 * 输出：3
 *
 * 输入：nums = [1, 2, 3]
 * 输出：-1
 */

/**
 * 指针
 * 遍历数组，计算左右累加和，如果找到返回i，未找到返回-1
 */
const midSumIndex = function (nums) {
  let p = 0;
  while (p <= nums.length - 1) {
    let leftSum = 0;
    nums.slice(0, p).forEach((val) => (leftSum += val));
    let rightSum = 0;
    nums.slice(p + 1).forEach((val) => (rightSum += val));

    if (leftSum === rightSum) {
      return p;
    } else {
      p++;
    }
  }
  return -1;
};

/**
 * 找规律
 *
 * 数组所有元素的累加和 = 左累加和 + 右累加和 + nums[i]
 * = 2*sum + nums[i]
 */
const midSumIndexBetter = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] === total) {
      return i;
    }
    sum += nums[i];
  }
  return -1;
};
