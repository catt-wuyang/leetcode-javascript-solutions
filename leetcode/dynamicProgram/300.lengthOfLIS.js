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
 * 最长递增子序列 - 应用于Vue、React虚拟dom进行diff算法时
 */

/**
 * 动态规划
 *
 * 双层循环，找nums[i]之前的比自身小的元素，有一个累加1，不断更新当前对应的 dp[i] 值
 * dp[i] 表示，数组nums遍历到第i个元素时，最长递增子序列的个数
 * 最开始dp 值全都填充1，是因为每个元素算自身，最长递增子序列都为1
 * 最后返回dp 中最大值，即为数组的最长递增子序列
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
