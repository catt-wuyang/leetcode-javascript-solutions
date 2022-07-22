/**
 * 链表实现 1=>2=>3=>4
 */

/*
 * 最小单元为节点 node
 * 节点有两个属性: value值、next指向
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
 * 链表有两个属性：head头节点、length长度
 * 定义两个方法：append插入节点、print打印
 * append：新建一个节点，插入到链表中有两种情况
 * 一是链表没有头节点，说明链表为空，那直接将该节点赋值给头节点即可
 * 二是链表有头节点，要找到链表末尾的节点，再将其 .next 赋值为该节点
 */
class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    let p = this.head;
    if (this.head) {
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      this.head = node;
    }
    this.length++;
  }

  print() {
    let p = this.head;
    let ret = "";
    if (this.head) {
      while (p.next) {
        ret += `${p.value}=>`;
        p = p.next;
      }
      ret += p.value;
      console.log(ret);
    } else {
      console.log("empty");
    }
  }
}

let linkList = new LinkNodeList();

linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);

console.log(linkList.print()); // 1=>2=>3=>4
console.log(linkList.length); // 4
