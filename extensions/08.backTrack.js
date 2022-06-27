/**
 * 回溯 - 需要全部或符合要求的路径
 */
let ret = [];
const backTrack = function (ret, path, nums) {
  // 终止条件，临时路径新增另一个路径
  if (path.length === nums.length) {
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    path.push(nums[i]); // 获取一个数据
    backTrack(ret, path, nums); // 执行递归
    path.pop(); // 回溯，撤回选择，再选择下一个数据
  }

  return ret;
};

backTrack(ret);

/**
 * 回溯 - 不需要路径，只搜索验证返回 true 或 false
 * 可以删除临时路径的逻辑
 */
const backTrackCheck = function (path, nums) {
  for (let i = 0; i < nums.length; i++) {
    backTrack(ret, nums); // 执行递归
    path.pop(); // 回溯，撤回选择，再选择下一个数据
  }
};

backTrackCheck();
