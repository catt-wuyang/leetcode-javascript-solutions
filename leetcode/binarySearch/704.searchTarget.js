/**
 * 704.搜索目标值
 *
 * 给定一个升序数组，有 n 个元素，和一个目标值 target
 * 请找到目标值并返回其对应下标，未找到则返回 -1
 *
 * 示例：
 * 输入：nums = [-1,0,3,5,9,12] target = 9
 * 输出：4
 */

/**
 * 经典二分查找
 */
const search = function (nums, target) {
  if (!nums.length) return -1;

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
};
