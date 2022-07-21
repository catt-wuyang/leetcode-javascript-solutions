/**
 * 深度优先搜索，遍历 DOM 树
 */
const traverse = function (element, func) {
  func(element);
  for (let child of element.children) {
    traverse(child, func);
  }
};

/**
 * 利用链表，遍历 DOM 树
 */
const traverseNodeList = function (element, func) {
  func(element);
  let child = element.firstElementChild;
  while (child !== null) {
    traverseNodeList(child, func);
    child = child.nextElementSibling;
  }
};

/**
 * 统计当前网页中共有多少标签
 */
const countTagNames = function () {
  const tags = [...document.querySelectorAll("*")].map((tag) => tag.tagName);
  const ret = [...new Set(tags)];
  return ret.size;
};

/**
 * 统计当前网页中出现次数最多的三个标签
 *
 * 先统计网页中的所有 tag
 * 再利用备忘录记录每个 tag 出现的频次
 * 对备忘录排序，并取出现频次最高的前三个标签
 */
const mostCountTags = function () {
  const tags = [...document.querySelectorAll("*")].map((tag) => tag.tagName);

  let memo = new Map();
  tags.forEach((tag) => {
    if (!memo.has(tag)) {
      memo.set(tag, 1);
    } else {
      memo.set(tag, memo.get(tag) + 1);
    }
  });

  let ret = [...memo].sort((a, b) => b[1] - a[1]).slice(0, 3);
  let str = ``;
  ret.map((tag) => (str += `${tag[0]}${tag[1]}次`));
  return str;
};
