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
