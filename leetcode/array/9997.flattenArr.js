/**
 * 数组展平
 *
 * 输入：arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
 * 输出：[1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10]
 */

/**
 * ES6 展开多维数组的方法 flat
 */
const flatten = function (arr) {
  if (!arr.length) return arr;
  return arr.flat(Infinity);
};

/**
 * 利用递归拆开多维数组
 * 判断如果是元素是数组，接着拆
 * 如果不是数组，则直接 push 到返回值
 */
const flattenRe = function (arr) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ret = ret.concat(flatten(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
};

/**
 * ES6 扩展运算符
 *
 * 判断数组里元素是否还有数组，返回 true 则循环继续，直到最后一个数组被拆解
 * 是则不断更新 arr 
 */
const flattenSpo = function (arr) {
  while (arr.some((n) => Array.isArray(n))) {
    arr = [].concat(...arr);
  }
  return arr;
};

const arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10,
];
console.log(flatten(arr));
