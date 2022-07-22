/**
 * 344.反转字符串
 *
 * 描述：将给定的字符串数组反转，要求必须原地修改数组，不能使用额外的空间
 *
 * 示例：
 * 输入：str = ['h', 'e', 'l', 'l', 'o']
 * 输出：['o', 'l', 'l', 'e', 'h']
 */

/**
 * 暴力解法 - 直接反转
 */
const reverseArrStr = function (arr) {
  return arr.reverse();
};

reverseArrStr(["a", "b", "c", "d"]); // ['d', 'c', 'b', 'a']

const reverseStr = function (str) {
  return str.split("").reverse().join("");
};

reverseStr("hello"); // 'olleh'

/**
 * 双指针 - 左右指针，遍历对比大小，然后颠倒位置
 */
const reverseStrBetter = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
};
