/**
 * LRU 缓存实现
 *
 * 队列，先进先出，存在的 key 从原来的位置删掉后提到队列最前面
 */
const LRUCache = function (capacity) {
  this.cache = new Map();
  this.max = capacity;
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let tmp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, tmp);
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size >= this.max) {
    const oldestKey = this.cache.keys().next().value;
    this.cache.delete(oldestKey);
  }
  this.cache.set(key, value);
};

let cache = new Map();

cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);
cache.set("d", 4);

console.log(cache.keys()); // [Map Iterator] {'a', 'b', 'c', 'd'} 生成器
console.log(cache.keys().next()); // { value: 'a', done: false }
console.log(cache.keys().next().value); // a
