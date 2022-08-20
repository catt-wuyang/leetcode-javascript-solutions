/**
 * 函数记忆
 *
 * 利用映射 Map 进行缓存，复制给局部变量 cache
 * 外部函数返回了内部函数，且内部函数持有对作用域的引用，即 cache 变量，形成了闭包
 * 返回内部函数功能，将参数数组转换成字符串，并将该字符串作为缓存对象 cache 的属性
 * 若缓存过了，直接返回对应的值；若没缓存过，利用加工函数对其进行计算，并对其缓存
 */
const memoize = function (f) {
  const cache = new Map();
  return function (...args) {
    let key = args.length + args.join("+");
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let value = f.apply(this, args);
      cache.set(key, value);
      return value;
    }
  };
};

/**
 * 求两个数的最大公约数
 */
function gac(a, b) {
  if (a < b) {
    [a, b] = [b, a];
  }
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// 执行
console.log(memoize(gac)(85, 187));
