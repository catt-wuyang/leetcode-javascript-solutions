/**
 * 操作对象
 */

/**
 * 对象合并 - ES5
 */
const mergeObj = function (target, source) {
  for (let key of Object.keys(source)) {
    target[key] = source[key];
  }
  return target;
};

console.log("mergeObj", mergeObj({ x: 1 }, { x: 2, y: 2, z: 4 }));

/**
 * 对象合并 - ES6
 */
console.log("objectAssign", Object.assign({ x: 1 }, { x: 2, y: 2, z: 4 }));

/**
 * 对象合并，仅复制那些不存在的属性
 *
 * target = {x:1}
 * source = {x:2,y:2,z:4}
 *
 * ret = {x:1,y:2,z:4} 属性 x 存在，所以不复制，保留源对象中的值
 */
const mergePartObj = function (target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {
        target[key] = source[key];
      }
    }
    return target;
  }
};

console.log(
  "mergePartObj",
  mergePartObj({ x: 1 }, { x: 2, y: 2, z: 4 }, { y: 4 })
);

/**
 * 删除对象属性
 *
 * 从 target 中删除所有 source 中包含的属性
 *
 * target = {x:1,y:2,z:4,w:7}
 * source = {x:1,w:7}
 * ret = {y:2,z:4}
 */
const subtract = function (target, source) {
  for (let key of Object.keys(source)) {
    if (key in target) {
      delete target[key];
    }
  }
  return target;
};

console.log("subtrack:", subtract({ x: 1, y: 2, z: 4, w: 7 }, { x: 1, w: 7 }));
