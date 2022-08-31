/**
 * 350.两个数组交集
 *
 * 给定两个数组nums1和nums2，找到并返回两个数组的交集
 * 交集中元素与两个数组中出现的次数一致，可以不考虑顺序
 *
 * 示例：
 * 输入：nums1 = [1,2,2,1] nums2 = [2,2]
 * 输出：[2,2]
 */
const intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let ret = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) {
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      ret.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return ret;
};
