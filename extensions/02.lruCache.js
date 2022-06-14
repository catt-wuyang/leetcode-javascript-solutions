/**
 * LRU 缓存实现
 */

let cache = new Map();

cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);
cache.set("d", 4);

console.log(cache.keys()); // [Map Iterator] {'a', 'b', 'c', 'd'} 生成器
console.log(cache.keys().next()); // { value: 'a', done: false }
console.log(cache.keys().next().value); // a
