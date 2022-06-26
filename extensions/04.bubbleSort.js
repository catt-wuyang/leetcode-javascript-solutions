/**
 * 冒泡排序
 *
 * 遍历数组，每个元素和右边的元素比较，如果大于右边的元素，就交换位置，否则不动
 * 每次遍历，即把数组中最大的元素，排序到了末尾
 * 外层遍历，则排除已排序的元素后，再使用冒泡排序
 *
 * 缺点：复杂度O(n^2) 低效
 */

const nums = [12, 9, 7, 402, 16, 912, 11];

const bubbleSort = function (nums) {
  let len = nums.length;
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }
  return nums;
};
