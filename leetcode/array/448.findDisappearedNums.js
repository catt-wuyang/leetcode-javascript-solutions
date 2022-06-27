/**
 * 448.找到数组中消失的数字
 *
 * 描述：给定一个无序的数组 nums，其长度为 n 数组元素大小都是在 1～n 范围内的，
 * 但缺少了部分元素，找到那些消失的元素并返回
 *
 * 示例：
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6] nums 排序并排除重复元素后为[1,2,3,4,7,8] 可见消失的元素为[5,6]
 *
 * 输入：nums = [1,1]
 * 输出：[2]
 */

/**
 * 思路是创建一个与 nums 相等长度的空数组，遍历数组将各个元素设置到对应的位置上，
 * 如果已经存在了，跳过
 * 最后再遍历新数组，某元素位置空缺，则说明是消失的元素，收集到 list 里即可
 * 额外创建了两个数组用于存储数据，空间复杂度
 */
const findDisappearedNums = function (nums) {
  let arr = [...Array(nums.length)];
  for (let i = 0; i < nums.length; i++) {
    if (!arr[nums[i] - 1]) {
      arr[nums[i] - 1] = nums[i];
    }
  }

  let list = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      list.push(i + 1);
    }
  }
  return list;
};
