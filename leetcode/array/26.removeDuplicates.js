/**
 * 26.删除数组中的重复项
 *
 * 描述：给定升序数组 nums 请原地删除重复的元素，不使用额外的空间，并返回数组的长度
 *
 * 示例：
 * 输入：nums = [1,1,2,2,3,3,3,4]
 * 输出：4 nums = [1,2,3,4]
 *
 * 输入：nums = [1,1,1,1,1]
 * 输出：1 nums = [1]
 */

/**
 * 暴力解法 - for 循环
 */
const removeDuplicates = function (nums) {
  if (!nums.length) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (nums[i] === nums[j]) {
      nums.splice(j, 1);
    }
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 更优解法 - 快慢指针、双指针
 *
 * [0,1,1,2,2,3,4] 设定 slow fast 两个快慢指针都在1位置
 * 遍历数组元素，fast 每次都往前走一步，判断 fast 和 fast-1 的值是否相同
 * 相同 fast 就接着往前走，不同就将 fast位置的值提到前面 slow 位置处，slow 往前走一位
 * fast 遍历到数组末尾时，slow 位置及之前的元素就都不是重复的了
 * 最终返回 slow 即可，后面重复的元素忽略不计
 */
const removeDuplicatesBetter = function (nums) {
  if (!nums.length) return 0;

  let slow = 1;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
};
