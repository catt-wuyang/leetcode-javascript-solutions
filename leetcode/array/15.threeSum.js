/**
 * 15.三数之和
 *
 * 描述：给定一个数组nums，找到所有不重复的三个元素，使其相加和为0，并返回这三个元素构成的数组
 *
 * 示例：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 * 输入：nums = []
 * 输出：[]
 */

/**
 * 双指针
 * 1. 先对数组排序，跳过重复元素，再利用双指针搜索，滑动窗口查找
 * 2. 外层循环，i 遍历数组；内层循环，左右指针 找三数之和为 0
 * 3. 细节点
 *    找到一个结果后，左右指针同时向内移动收缩
 *    左指针右移，跳过重复元素
 *    右指针左移，跳过重复元素
 */
const threeSum = function (nums) {
  let ret = [];
  nums.sort((a, b) => a - b);
  if (nums.length < 3) return ret;
 
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        ret.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }
  }
  return ret;
};
