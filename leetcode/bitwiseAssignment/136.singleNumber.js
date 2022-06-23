/**
 * 136.只出现一次的数字
 *
 * 描述：给定一个非空数组，数组中仅有一个元素出现过一次，
 * 其他元素均出现过两次或两次以上，返回仅出现过一次的元素
 *
 * 示例：
 * 输入：[2,1,2]
 * 输出：1
 *
 * 输入：[4,1,2,2,1]
 * 输出：4
 */

/**
 * 常规解法
 *
 * 遍历数组，记录每个元素出现的次数，再找到出现次数为 1 的数字
 */
const singleNumber = function (nums) {
  let times = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in times) {
      times[nums[i]] += 1;
    } else {
      times[nums[i]] = 1;
    }
  }

  for (const key in times) {
    if (times[key] === 1) {
      return key;
    }
  }
};

/**
 * 位运算，异或解法
 *
 * 异或相同返回 1 不同返回 0，找到一组数中唯一出现过一次的数字，因为相同的数字都抵消掉了
 * ret = 0^4^2^1^1^2 = 4
 */
const singleNumberBetter = function (nums) {
  let ret = 0;
  nums.forEach((num) => {
    ret = ret ^ num;
  });
  return ret;
};
