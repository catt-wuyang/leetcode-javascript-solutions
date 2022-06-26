/**
 * 快排 - 二分
 *
 * 在数组中随机找到一个标志位 flag，然后其他所有元素都和标志位做对比，
 * 如果比我大就放在右边，比我小就放在左边
 * 总是将数组拆成两半做对比，小的始终放进左边，大的始终放在右边
 * 复杂度O(n*logn) 相比冒泡排序高效
 * Array.sort((a, b) => a - b) 中逻辑就用到了快排
 */

const nums = [12, 9, 7, 402, 16, 912, 11];

const quickSort = function (nums) {
  if (nums.length < 2) {
    return nums;
  }

  let flag = nums[0];
  let left = [];
  let right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > flag) {
      right.push(nums[i]);
    } else {
      left.push(nums[i]);
    }
  }
  return quickSort(left).concat(flag, quickSort(right));
};
