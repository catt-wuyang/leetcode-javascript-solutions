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
 * [0,1,1,2,2,3,4] 设定 slow fast 两个快慢指针
 * fast 快指针，每次都往前走一步，如果快指针指向对应值和慢指针指向对应值不同，
 * 就先让 slow 往前走一步，然后设定当前 slow 指向的值为 fast 指向的值
 * 原理就是一直在根据 fast 来判断 slow 是否前进及值
 * return slow 索引+1 数组的长度，并且题目中提及不考虑后面塞什么值，不影响
 */
const removeDuplicatesBetter = function (nums) {
  if (!nums.length) return 0;

  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
};
