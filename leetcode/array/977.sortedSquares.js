/**
 * 977.有序数组的平方
 *
 * 描述：给定一个无序数组 nums，返回递增排序后的数组，且每个数组的元素都要求平方
 * 返回新数组，非原地修改
 *
 * 示例：
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 */

/**
 * 暴力解法 - 遍历每项平方，再整体排序
 */
const sortedSquares = function (nums) {
  const newNums = nums.map((n) => n * n);
  newNums.sort((a, b) => a - b);
  return newNums;
};

/**
 * 更优解法 - 左右双指针，比较大小赋值
 */
const sortedSquaresBetter = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  let arr = Array(nums.length);
  let k = right;

  while (left <= right) {
    let l = nums[left] * nums[left];
    let r = nums[right] * nums[right];
    if (l < r) {
      arr[k] = r;
      right--;
    } else {
      arr[k] = l;
      left++;
    }
  }
  k--;

  return arr;
};
