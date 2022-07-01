/**
 * 300.最长递增子序列
 *
 * 描述：给定一个数组 nums，找到其最长递增子序列的长度
 * 子序列是由数组衍生出来的，选取某几个元素且顺序保持不变，生成的新数列
 *
 * 示例：
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4 最长递增子序列 [2,3,7,101]
 *
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4 最长递增子序列 [0,1,2,3]
 *
 * 输入：nums = [7,7,7,7]
 * 输出：1
 */

/**
 * 动态规划
 *
 * 最长递增子序列 - 应用
 * Vue、React 虚拟 dom 进行 diff 的时候
 * 其中按顺序由小到大排列的元素不动，其他元素插入到正确位置中，
 * 把低效的 create 变成 update 性能随之高效
 */
const lengthOfLIS = function (nums) {
  let len = nums.length;
  if (!len) return 0;

  let dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

lengthOfLIS([0, 3, 1, 6, 2, 2, 7]);

/**
 * 贪心+二分
 */
const lengthOfLISBetter = function (nums) {
  let len = nums.length;
  if (!len) return 0;

  let arr = [nums[0]];
  for (let i = 0; i < len; i++) {
    if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
    } else {
      // 在arr中找到第一个大于nums[i]的元素，替换掉
      // 利用二分
      let left = 0;
      let right = arr.length - 1;
      while (left < right) {
        let mid = (left + right) >> 1;
        if (arr[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      arr[left] = nums[i];
    }
  }
  return arr.length;
};
