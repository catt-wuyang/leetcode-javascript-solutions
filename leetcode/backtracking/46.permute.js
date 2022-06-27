/**
 * 46.全排列
 *
 * 描述：给定一个无重复项的数组 nums，返回其所有可能的全排列
 *
 * 示例：
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 * 输入：nums = [1]
 * 输出：[[1]]
 */

/**
 * 回溯 - DFS 深度优先搜索算法（Depth-First-Search）
 *
 * DFS 算法是一种遍历或搜索树或图的算法，会尽可能深地搜索树的子分支
 * 当某个节点所构成的路径搜索完成后，会回溯到节点的起始位置，在搜索其他路径
 * 这一过程一直进行到从源节点可达的所有节点为止
 *
 * temp = [1]
 *    backTracking
 *    temp = [1,2]
 *        backTracking
 *        temp = [1,2,3] // 终止，获得一个排列
 * temp = [1]
 *    backTracking
 *    temp = [1,3]
 *        backTracking
 *        temp = [1,3,2] // 终止，获得一个排列
 */
const backTracking = function (list, temp, nums) {
  if (temp.length === nums.length) {
    return list.push([...temp]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) {
      continue;
    }
    temp.push(nums[i]);
    backTracking(list, temp, nums);
    temp.pop();
  }
};

const permute = function (nums) {
  let list = [];
  backTracking(list, [], nums);
  return list;
};

/**
 * 抽象成树形结构路径选择，深度优先搜索算法 DFS
 *
 * 全排列的逻辑全部交给 DFS
 * 终止条件是搜索的路径长度和数组长度相等时，将当前搜索的路径塞到结果里
 * 遍历数组元素，如果路径包含当前元素，跳过
 * 如果不包含当前元素，塞到当前路径里
 * 执行递归逻辑后，一条路径搜索完成，再回溯到源节点，pop出路径中的节点
 */
const permuteBetter = function (nums) {
  const dfs = function (path) {
    if (path.length === nums.length) {
      return ret.push([...path]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      dfs(path);
      path.pop();
    }
  };

  let ret = [];
  dfs([]);
  return ret;
};
