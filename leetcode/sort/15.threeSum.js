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
 * 排序解法
 *
 * 分析题目，无序的数组且目标与大小相关，可以考虑使用排序方式降低时间复杂度
 *
 * [-1,0,1,2,-1,-4]
 */
const threeSum = function (nums) {
  let list = []; // 最终返回结果

  nums.sort((a, b) => a - b); // 先对数组进行排序[-4,-1,-1,0,1,2]

  for (let i = 0; i < nums.length; i++) {
    // 排序后的数组，相同元素在一起，遇见相同的元素，直接跳过接着执行
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    // left right 范围内找可以和nums[i] 相加等于 0 的组合元素
    // 已知nums[i] 是第一个元素 -4，接下来要找到之后的元素组合相加为 4，凑成和为 0
    // left right 从1至数组末尾 [-1,-1,0,1,2]
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      // 忽略掉nums[i]
      if (right === i) {
        right--;
      } else if (nums[i] + nums[left] + nums[right] === 0) {
        // 恰好找到了 left right i 对应的元素和为0，就塞进list里
        list.push([nums[i], nums[left], nums[right]]);
        // 由于数组已排序，相同的数字会在一起，所以要判断
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        // 说明元素组合大了，要缩小，right左移使和变小
        right--;
      } else {
        // 说明元素组合小了，要变大，left右移使和变大
        left++;
      }
    }
  }
  return list;
};
