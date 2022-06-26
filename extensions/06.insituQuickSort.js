/**
 * 原地快排
 *
 * 数组中有两个指针，一个 left 一个 right，现在要把数组中随机一个标志位元素放到恰当的位置
 * left 往右走找到一个比标识位大的，right 往左走找到一个比标识位小的，
 * 让 nums[left] 和 nums[right] 交换位置，直到left 和 right 相遇停止遍历
 */

const nums = [12, 9, 7, 402, 16, 912, 11];

const getFlag = function (nums, start, end) {
  let init = start;
  let flag = nums[init];
  start++;
  while (start <= end) {
    while (nums[end] > flag) {
      end--;
    }
    while (nums[start] < flag) {
      start++;
    }
    if (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  [nums[init], nums[start - 1]] = [nums[start - 1], nums[init]];
  return start;
};

/*
 * 每次找到标识位，通过 flag 分出左右两个执行快排的区域
 * 一个区域是start 到 flag -1
 * 一个区域时 flag 到 end
 * 如[1,2,3,4,5,6,7] 标识位是4，start 是2，end 是 6
 * 两个区域分别是 [2，3] [4，5，6]
 * 重复递归，直到start与end遇见
 */
const insituQuicksort = function (nums, start, end) {
  if (start < end) {
    let flag = getFlag(nums, start, end);
    insituQuicksort(nums, start, flag - 1);
    insituQuicksort(nums, flag, end);
  }
  return nums;
};

const start = 0;
const end = nums.length - 1;
console.log(insituQuicksort(nums, start, end));
