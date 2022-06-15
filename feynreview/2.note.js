/**
 * Tuesday, June 14
 * 1. LRU 缓存实现 - 队列，先进先出，存在的 key 从原来的位置删掉后提到队列最前面
 * 2. 前端常用的数据结构 & 算法思想 & 题型
 * 3. 学习数据结构和算法方法，和学数学题类似；
 *    学知识点，看例题，做相关题型，记错题，再大量刷题，掌握常用知识点形成万能口袋，即用即拿
 */

/**
 * LRU 缓存
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
