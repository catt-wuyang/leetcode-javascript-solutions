/**
 * 1748.唯一元素的和
 *
 * 描述：给定一个数组 nums，找到数组中恰好一次的所有元素的和
 *
 * 示例：
 * 输入：nums = [1, 2, 3, 2]
 * 输出：4
 *
 * 输入：nums = [1,1,1,1,1]
 * 输出：0
 */

/**
 * 对象统计解法 - 记录每个元素出现的次数
 *
 * 设置一个对象，记录数组中每个元素出现的次数，如果在 obj 中能找见就次数+1
 * 如果找不见，说明第一次出现，则次数为 1
 * sum 对应则是出现过就减去对应的元素值，如果没出现过就加上对应的元素值
 * 但可能出现的问题是，出现过两次以上的元素值多减，需要限制
 */
const sumOfUnique = function (nums) {
  let obj = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]] += 1;
      if (obj[nums[i]] <= 2) {
        sum -= nums[i];
      }
    } else {
      obj[nums[i]] = 1;
      sum += nums[i];
    }
  }
  return sum;
};

/**
 * Map 记录状态解法，和上面思路相似
 */
const sumOfUniqueBetter = function (nums) {
  let status = new Map();
  let sum = 0;

  for (const num of nums) {
    if (!status.has(num)) {
      sum += num;
      status.set(num, 1);
    } else if (status.get(num) === 1) {
      sum -= num;
      status.set(num, 2);
    }
  }
  return sum;
};
