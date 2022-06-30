/**
 * 146.LRU 缓存
 *
 * 描述：设计实现一个 LRU 缓存，即最近最少使用的数据结构
 * 可以理解为一个队列 1=>2=>3=>4 值都是正整数，有最大容量限制 capacity
 * 有两个方法 get 和 put，get 查找关键字 key 找到了就返回这个 key 如果没找到就返回 -1
 * put 就是塞入关键字 key，如果已经存在了，先把之前对应的值删掉，然后放在队列的最前面，
 * 如果没找到，就在队列最前面插入这个 key-value 的值，当插入值时当前队列的最大容量超过限制，
 * 就把队列最开始的值给推出去，删掉，先进先出的原则
 *
 * 示例：
 * cache 1=>2=>3=>4, 最大容量 max_size = 4
 * 进来了一个 5 那么 cache 5=>1=>2=>3 最前面进来，最后一个4出去了
 * 又进来了一个 2 一看队列里有这个值，把 2 原来的位置删掉，提到最前面
 * cache 2=>5=>1=>3
 */

/**
 *
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.cache = new Map();
  this.max = capacity;
};

/**
 *
 * @param {number} key
 * @return {number}
 *
 * 1=>2=>3=>4
 * 2=>1=>3=>4
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let tmp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, tmp);
    return tmp;
  }
  return -1;
};

/**
 *
 * @param {number} key
 * @param {number} value
 * @return {void}
 *
 * Map 中 this.cache.keys().next().value 是集合中最开始添加进去的值
 * 所以当队列 size 超出最大容量时，要把最早的给推出去 先进先出
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size >= this.max) {
    const oldestKey = this.cache.keys().next().value;
    this.cache.delete(oldestKey);
  }
  this.cache.set(key, value);
};
