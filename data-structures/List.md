实现一个链表


```js
class ListNode{
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {

  constructor (list) {
    this.head = null;
    this.size = 0; // 真实的 list 没有 size 属性
    list.forEach(val => this.push(val))
  }

  // 在尾部追加元素
  // 有 head 和 next，看来实现的是双向链表
  push (val) {
    let node = new ListNode(val)
    let current = null
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }

    // 查看链表
  toString () {
    if(!this.head) return this.head
    let str = this.head.val
    let current = this.head
    for(let i = 0; i < this.size; i++){
      str += `->${current.val}`
      current = current.next
    }
    return str
  }
}
```
