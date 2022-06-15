/**
 * 283.移动零
 *
 * 描述：给定一个数组 nums，将数组中的 0 全都移动到数组的末尾，
 * 且其他非零元素仍保存原来相对排序位置不变，需在原地修改数组
 *
 * 示例：
 * 输入：nums = [0, 1, 0, 3, 12]
 * 输出：[1,3,12,0,0]
 *
 * 输入：nums = [0]
 * 输出：[0]
 */

/**
 * 暴力解法
 * 非零元素利用指针，零元素个数记录下来，再循环完再统一末尾修改
 */
const moveZeroes = function (nums) {
  let k = 0;
  let zero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    } else {
      zero++;
    }
  }

  for (let i = 1; i <= zero; i++) {
    nums.splice(nums.length - i, 1, 0);
  }
};

/**
 * 更优解法 - 双指针，交换位置
 *
 * [0,1,0,3,12]
 * [1,0,0,3,12]
 * [1,3,0,0,12]
 * [1,3,12,0,0]
 */
const moveZeroesBetter = function (nums) {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast]) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      // let tmp = nums[slow];
      // nums[slow] = nums[fast];
      // nums[fast] = tmp;
      slow++;
    }
    fast++;
  }
};
