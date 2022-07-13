/**
 * 1.二叉树的中序遍历
 */
const preoderTraveral = function (root) {
  let ret = [];
  const dfs = function (root) {
    if (root === null) {
      return;
    }

    dfs(root.left);
    ret.push(root.val);
    dfs(root.right);
  };

  dfs(root);
  return ret;
};

/**
 * 2.翻转二叉树
 */
const invertTree = function (root) {
  if (root === null) {
    return;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

/**
 * 3.最长递增子序列
 */
const lengthOfLIS = function (nums) {
  let len = nums.length;
  if (!len) {
    return 0;
  }

  let ret = [nums[0]];
  for (let i = 0; i < len; i++) {
    if (nums[i] > ret[ret.length - 1]) {
      ret.push(nums[i]);
    } else {
      let left = 0;
      let right = ret.length - 1;
      while (left < right) {
        let mid = [left + right] >> 1;
        if (ret[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      ret[left] = nums[i];
    }
  }

  return ret.length;
};

/**
 * 4.两数之和
 */
const twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let match = target - num;
    if (num in obj) {
      return [i, obj[num]];
    } else {
      obj[match] = i;
    }
  }
};

/**
 * 5.三数之和
 */
const threeSum = function (nums) {
  let ret = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else if (nums[i] + nums[left] + nums[right] === 0) {
        ret.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
      } else {
        right++;
      }
    }
  }

  return ret;
};
