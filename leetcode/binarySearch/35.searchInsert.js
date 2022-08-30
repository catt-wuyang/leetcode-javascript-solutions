/**
 * 35.搜索插入位置
 *
 * 描述：给定一个排序数组 nums 和一个目标值 target，要求在数组中找到目标值，并返回它对应的索引
 * 如果数组中不存在目标值，则根据排序插入的位置，返回它对应的索引
 *
 * 示例：
 * 输入：nums = [1,3,5,6] target = 5
 * 输出：2
 *
 * 输入：nums = [1,3,5,6] target = 2
 * 输出：1
 *
 * 输入：nums = [1,3,5,6] target = 7
 * 输出：4
 */

/**
 * 暴力解法 - 边缘和常规情况全都考虑到位
 *
 * 1. 数组中找到了target 直接返回 i
 * 2. target 比数组第一个元素小，返回 i 即 0
 * 3. target 比前一个值大，比后一值小，返回 i+1
 * 4. target 比数组最后一个值大，返回 i+1
 */
const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || (target < nums[i] && i === 0)) {
      return i;
    } else if (
      (nums[i] < target && target > nums[i]) ||
      (target > nums[i] && i === nums.length - 1)
    ) {
      return i + 1;
    }
  }
};

/**
 * 二分查找
 *
 * 时间复杂度也不太好，先考虑边缘情况，再利用二分查找返回对应的索引位置
 * 重点在于理解二分查找的应用
 */
const binarySearchInsert = function (nums, target) {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // 等价于 let mid = Math.round((left + right) / 2);
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

const nums = [1, 3, 5, 6],
  target = 2;
binarySearchInsert(nums, target);
