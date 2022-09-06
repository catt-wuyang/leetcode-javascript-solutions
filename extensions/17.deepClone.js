/**
 * 深拷贝
 * 实现：浅拷贝 + 递归
 */
const deepClone = function (obj) {
  if (typeof obj !== "object") return obj; // 不是对象直接返回

  let target = Array.isArray(obj) ? [] : {}; // 兼容数组
  for (let key in obj) {
    if (obj !== null && typeof obj[key] === "object") {
      target[key] = deepClone(obj[key]);
    } else {
      target[key] = obj[key];
    }
  }
  return target;
};

/**
 * 深拷贝
 * 考虑时间复杂度，算法优化
 */
const deepCloneBetter = function (obj) {
  const root = {};
  const loopList = [{ parent: root, key: undefined, data: obj }];

  while (loopList.length) {
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    let ret = parent;
    if (typeof key !== "undefined") {
      ret = parent[key] = {};
    }

    for (let k in data) {
      if (typeof data[k] === "object") {
        loopList.push({
          parent: ret,
          key: k,
          data: data[k],
        });
      } else {
        ret[k] = data[k];
      }
    }
  }
  return root;
};

/**
 * 冻结 const 定义的变量
 */
const constantize = function (data) {
  Object.freeze(data);
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && typeof data[key] === "object") {
      constantize(data[key]);
    }
  });
};
