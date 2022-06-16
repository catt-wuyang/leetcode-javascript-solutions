/**
 * 209.最小长度子数组
 *
 * 描述：给定一个数组 nums 和一个正整数 target，找出数组中满足条件的数组片段
 * 累加和 >= target 输出数组片段的长度，如果没找见最小长度子数组，则返回 0
 */

/**
 * 双指针 - 滑动窗口宽度解法
 *
 * slow fast 两个指针都数组开头开始移动，fast 每次都移动一步
 * 并同时计算 fast 移动过的元素累加和，如果现在窗口宽度 >= target 就要通过控制 slow 来缩小窗口范围
 * slow 往前移动一步，sum 就减去 nums[slow] 对应的元素值，然后比较 result 计算的长度和 fast slow 距离
 * 两者取最小值，但如果fast slow 都扫完整个数组，还没找到对应的累积和是 target 就返回 0
 */
const minSubArrayLen = function (nums, target) {
  let slow = 0;
  let fast = 0;

  let sum = 0;
  let len = nums.length;
  let result = len + 1;

  while (fast < len) {
    sum += nums[fast];
    fast++;
    while (sum >= target) {
      let subNumsLen = fast - slow;
      result = result < subNumsLen ? result : subNumsLen;
      sum -= nums[slow];
      slow++;
    }
  }
  return result > nums.len ? 0 : result;
};
