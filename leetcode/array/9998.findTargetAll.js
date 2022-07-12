/**
 * 9998.找到所有元素
 *
 * 描述：给定一个数组 nums，找到所有匹配的元素并返回其索引
 *
 */
const findTargetAll = function (nums, target) {
  let ret = [];
  let pos = 0;
  while (pos < nums.length) {
    pos = nums.indexOf(target, pos);
    if (pos === -1) {
      break;
    }
    ret.push(pos);
    pos += 1;
  }
  return ret;
};

const nums = [1, 2, 4, 2, 4, 7, 1, 4, 2];
const target = 2;
const ret = findTargetAll(nums, target);
console.log(ret);
