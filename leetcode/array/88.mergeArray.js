/**
 * 88.合并并排序两个数组
 *
 * 描述：给定两个升序的数组 nums1 和 nums2，长度分别是 m 和 n
 * 要求将 nums2 合并到 nums1 数组中，并按升序对 nums1 排序
 *
 * 示例：
 * 输入：
 * nums1 = [1,2,3,0,0,0] m = 3
 * nums2 = [2,5,6] n = 3
 * 输出：[1,2,2,3,5,6]
 */

/**
 * 直观解法 - 先合并再排序
 *
 * 参考快排
 * 时间复杂度 O((m+n)log(m+n))
 * 空间复杂度 O(log(m+n))
 */
const mergeArray = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};

/**
 * 双指针 - 从前往后比较
 *
 * 因为两个数组都是升序数组，利用这个特点定义两个指针，分别指向每个数组的开头
 * 创建一个存放排序后的数组，不断比较两个指针值，进行排序，最后再复制给 nums1
 */
const mergeArrayPointer = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let ret = new Array(m + n).fill(0);
  let value;

  while (p1 < m || p2 < n) {
    if (p1 === m) {
      value = nums2[p2++];
    } else if (p2 === n) {
      value = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      value = nums1[p1++];
    } else {
      value = nums2[p2++];
    }

    ret[p1 + p2 - 1] = value;
  }

  for (let i = 0; i < ret.length; i++) {
    nums1[i] = ret[i];
  }
  return nums1;
};

/**
 * 双指针 - 从后往前比较
 *
 * 从后往前确定哪个数大，取走填入
 * 遍历结束的条件是 nums2 中的数都合并到 nums1 里了
 *
 * 解题思路
 * nums1 = [1,2,3,0,0,0]
 * nums2 = [2,5,6]
 * 设置 i3, j6, k0 都是数组对应的最末尾元素
 * 1.i3<j6，则k=j=6，k-- j-- 结果i3 j5 k6
 * 2.i3<j5，则k=j=5，k-- j-- 结果i3 j2 k5
 * 3.j2<i3，则k=i=3，k-- i-- 结果i2 j2 k3
 * 3.i2<=j2，则k=j=2，k-- j-- 结果 i2 j出去 k2
 * 4.i2 直接k=2 k-- i-- 结果 i1 k2
 * 5.i1 直接k=1 k-- i-- 结果 i j k 都 <0 结束
 */
const mergeArrayBetter = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 || j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2[j];
      k--;
      j--;
    } else if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else if (j < 0) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else if (i < 0) {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
  return nums1;
};
