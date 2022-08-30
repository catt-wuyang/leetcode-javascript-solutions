/**
 * 78.数组子集
 *
 * 给定一个数组nums，数组中元素互不相同，返回数组中所有子集
 * 解集中不能包含重复的子集，子集顺序任意
 *
 * 示例：
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

/**
 * 回溯 - 后序递归
 */
const subsetsLast = function (nums) {
  let ret = [];
  const dfs = (i, list) => {
    if (i == nums.length) {
      ret.push(list.slice());
      return;
    }

    list.push(nums[i]);
    dfs(i + 1, list);
    list.pop();
    dfs(i + 1, list);
  };

  dfs(0, []);
  console.log(ret);
  return ret;
};

/**
 * 回溯 - 前序递归
 */
const subsetsBefore = function (nums) {
  const res = [];

  const dfs = (index, list) => {
    res.push(list.slice());
    for (let i = index; i < nums.length; i++) {
      list.push(nums[i]);
      dfs(i + 1, list);
      list.pop();
    }
  };
  dfs(0, []);
  return res;
};
