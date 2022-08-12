import { ListNode, DoublyLinkedList } from './linked-list'

/**
 * Enhanced cache implementation with capacity
 * Based on LRU eviction policy,
 * Implemented by regular JS Object and doubly linked list for capacity tracking
 * (List Head = LRU, List Tail = MRU)
 */
export class EnhancedCache {
    /**
     * @param {number} maxItems
     */
  constructor (maxItems) {
    this.maxItems = maxItems
    this.keyToNodeMapping = {} // [key(string) -> reference to node]
    this.linkedList = new DoublyLinkedList()
  }

  getLruKey () {
    return this.linkedList.head?.key
  }

  getSize () {
    return this.linkedList.length
  }

  isMaxReached () {
    return this.getSize() === this.maxItems
  }

  /**
     * Advance given node/item to be mru (end of the list)
     * @param {ListNode} node
     */
  setMostRecentlyUsed(node) {
    // Move node to the end of the list
    const oldTail = this.linkedList.tail
    oldTail?.nextNode = node
    this.linkedList.tail = node
  }

  /**
     * Set (Update/Insert) - Evict lru item if cache reached maxSize
     * @param {string} key
     * @param {any} val
     */
  set (key, val) {
    if (this.keyToNodeMapping[key]) {
      // Only update if exists
      this.keyToNodeMapping[key].value = val
      return
    }

    if (this.isMaxReached()) {
      // MaxSize reached => Evict lru
      this.evict()
    }

    // Create new kv node + add it to list & mapping
    const newNode = new ListNode(key, val)
    this.keyToNodeMapping[key] = newNode
    this.linkedList.appendNode(newNode) // Append as tail -> Most recently used

  }

  evict () {
    const keyToEvict = this.getLruKey()
    this.linkedList.removeHead()
    delete this.keyToNodeMapping[keyToEvict]
  }

  /**
     *
     * @param {string} key
     * @returns {any}
     */
  get (key) {
    if (!this.keyToNodeMapping[key]) {
      return undefined
    }

    const cacheNode = this.keyToNodeMapping[key]
    this.setMostRecentlyUsed(cacheNode)
    return cacheNode.value
  }

  toObject () {}
}
