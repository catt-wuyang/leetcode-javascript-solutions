/**
 * 697.最短数组的众数距离
 *
 * 给定一个整数数组 nums，找到最短的数组的度的距离
 *
 * 示例：
 * 输入：nums = [1,2,2,3,1]
 * 输出：2
 */

/**
 * 先遍历数组找频数最高的元素
 * 再遍历数组找相等的频数最高的元素的距离，且返回最短的距离
 */
const shortSubArray = function (nums) {
  let obj = {};
  let maxCount = 1;
  for (let val of nums) {
    if (val in obj) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
    maxCount = Math.max(maxCount, obj[val]);
  }

  let map = new Map();
  let distance = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1);
    if (map.get(cur) == maxCount) {
      let start = nums.indexOf(cur);
      distance = Math.min(distance, i - start + 1);
    }
  }
  return distance;
};
