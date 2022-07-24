/*
 * 1. 两数之和
 *
 * 描述：给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出和为目标值 target 的两个整数，
 * 并返回它们的数组下标，假设只存在一个有效答案，且数组中同一个元素在答案中不能重复出现
 *
 * 示例：
 * 输入：nums = [2, 11, 7, 15], target = 9
 * 输出：[0, 2]
 *
 * 输入：nums = [3, 3], target = 6
 * 输出：[0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
 * 暴力解法
 *
 * 时间复杂度：O(N^2); 数组长度为 n，两个 for 循环，即 n*n
 * 空间复杂度：O(1); 程序中有 i，j 两个变量与 n 无关
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

/*
 * 更优解法
 *
 * 时间复杂度：O(N); 数组长度为 n，一个 for 循环， 即 n
 * 空间复杂度：O(N); 创建 obj 最多可能存储 n 各变量，即 n
 * 解题思路：根据需求匹配逻辑，构建一个 obj 需求记录本；循环遍历数组每一项
 * 计算当前值应该匹配的值，如 target = 9, 那么数组第一个元素 2 匹配的值就是 7
 * 如果在需求记录本 obj 里没找到匹配的值，就把匹配值 7 和对应的 2 的索引记录下来，obj = {7:0}
 * 当遍历到 2 的匹配值 7 时，可以直接返回 7 当前的索引 i 和记录本 obj 中 7 对应的索引
 * 实际上返回的 [2, 0] 和暴力解法输出结果是顺序相反的
 */
const twoSumBetter = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const match = target - num;
    if (num in obj) {
      return [i, obj[num]];
    } else {
      obj[match] = i;
    }
  }
};

const nums = [2, 11, 7, 15];
const target = 9;
twoSum(nums, target); // [0, 2]
twoSumBetter(nums, target); // [2, 0]
