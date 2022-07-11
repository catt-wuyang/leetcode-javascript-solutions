/**
 * 33.搜索旋转排序数组
 *
 * 描述：给定一个整数升序数组 nums，其中元素值互不相同，
 * 数组特点是有一部分排序被旋转了
 * 同时还有一个目标值 target，找到目标值的索引并返回，若未找到返回 -1
 *
 * 示例：
 * 输入：nums = [4,5,6,7,0,1,2] target = 0
 * 输出：4
 *
 * 输入：nums = [1] target = 0
 * 输出：-1
 */
const searchRotatedArray = function (nums, target) {
  if (!nums.length) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
