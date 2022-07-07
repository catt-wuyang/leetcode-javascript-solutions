/**
 * 349.两个数组的交集
 *
 * 描述：给定两个数组nums1 nums2，返回他们的交集，不用考虑输出结果的顺序问题
 * 输出的结果需要排除重复元素
 *
 * 示例：
 * 输入：nums1 = [1,2,2,1] nums2 = [2,2]
 * 输出：[2]
 *
 * 输入：nums1 = [4,9,5] nums2 = [9,4,9,7]
 * 输出：[4,9]
 */

/**
 * 普通解法 - 找到nums1 nums2 两数组中长度短的那个，
 * 遍历它在长数组中搜索，如果有就塞到结果里返回，能降低复杂度
 * 最后对输出结果进行数组排重
 */
const intersection = function (nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;

  let baseNums = len1 >= len2 ? nums2 : nums1;
  let searchNums = len1 >= len2 ? nums1 : nums2;

  let ret = [];
  for (let i = 0; i < baseNums.length; i++) {
    if (searchNums.includes(baseNums[i])) {
      ret.push(baseNums[i]);
    }
  }

  return [...new Set(ret)];
  // 等价于 return Array.from(new Set(ret));
};

/**
 * 利用 Set，思路大致相同
 */
const setIntersection = function (set1, set2) {
  if (set1.size > set2.size) {
    return setIntersection(set2, set1);
  }

  const ret = new Set();
  for (const num of set1) {
    if (set2.has(num)) {
      ret.add(num);
    }
  }

  return [...ret];
};

const intersectioOther = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return setIntersection(set1, set2);
};
