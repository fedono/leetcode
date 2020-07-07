class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashTable = {};
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key) {
    let node = this.hashTable[key];
    if (node === null) return -1;
    this.moveToHead(node); // 因为被读取了，该节点移动到链表头部
    return node.value;
  }

  moveToHead(node) {
    this.removeFromList(node); // 从链表中删除节点
    this.addToHead(node); // 添加到链表头部 // 都已经删除了，为什么还要添加到头部
  }

  removeFromList(node) {
    let tempForPrev = node.prev;
    let tempForNext = node.next;
    tempForPrev.next = tempForNext;
    tempForNext.prev = tempForPrev;
  }

  addToHead(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;

    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
  }

  put(key, value) {
    let node = this.hashTable[key];
    if (node == null) {
      let newNode = new ListNode(key, value);
      this.hashTable[key] = newNode;
      this.addToHead(newNode);
      this.count++;
    }
    else {
      node.value = value;
      this.moveToHead(node);
    }
  }

  removeLRUItem() {
    let tail = this.popTail();
    delete this.hashTable[tail.key];
    this.count--;
  }

  popTail() {
    let tailItem = this.dummyTail.prev;
    this.removeFromList(tailItem);
    return tailItem;
  }
}

