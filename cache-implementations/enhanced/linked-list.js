export class ListNode {
  constructor (value) {
    this.value = value
    this.nextNode = null
    this.prevNode = null
  }
}

export class DoublyLinkedList {
  constructor () {
    this.length = 0

    /**
     * @type {ListNode | null}
     */
    this.head = null

    /**
     * @type {ListNode | null}
     */
    this.tail = null
  }

  /**
   * Append node to the **end** of the list
     * @param {ListNode} node
     */
  appendNode (node) {
    if (this.length === 0) {
      this.length = 1
      this.head = this.tail = node
      node.nextNode = node.prevNode = null
      return
    }

    this.length++
    this.tail.nextNode = node
    node.prevNode = this.tail
    this.tail = node
  }

  removeHead () {
    if (!this.head) return

    this.length--
    const oldHead = this.head
    this.head = oldHead.nextNode

    if (this.head) {
      this.head.prevNode = null
    }
  }
}
