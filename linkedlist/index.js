// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let counter = 0;

    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;
    if (this.head && !this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let cur = this.head.next;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = node;
  }

  getAt(index) {
    if (!this.head) return null;
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.head;
    let cur = this.head.next;
    let counter = 1;
    while (cur) {
      if (counter === index) {
        prev.next = cur.next;
        return;
      } else {
        prev = cur;
        cur = cur.next;
        counter++;
      }
    }
    return null;
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let prev = this.head;
    let cur = this.head.next;
    let counter = 1;
    while(cur && index !== counter) {
      prev = cur;
      cur = cur.next;
      counter++;
    }
    prev.next = new Node(data, cur);
  }

  forEach(fn) {
    let node = this.head;
    while(node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
