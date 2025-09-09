#!/usr/bin/env node

export class HashMap {
  constructor() {
    this.loadFactor = 0.8;
    this.capacity = 16;
    this.bucket = new Array(this.capacity);
  }

  addLinkedList(key, value) {
    const list = new LinkedList();

    const node = this.addNewNode(key, value);

    list.head = node;
    list.tail = node;

    return list;
  }

  addNewNode(key, value) {
    const node = new Node();
    node.key = key;
    node.value = value;

    const nextNode = node.nextNode;

    return { key, value, nextNode };
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }

    return hashCode % this.capacity;
  }

  toString(hash) {
    let list = this.bucket[hash - 1];

    let current = list.head;
    let totalStr = "";

    while (current !== null) {
      totalStr += `( ${current.key} ) -> `;
      current = current.nextNode;
    }

    totalStr += "null";
    console.log(totalStr);
  }

  /********************/

  // Need to revisit 'set' to double capacity when we reach load factor

  findKey(key, hash) {
    const targetBucket = this.bucket[hash - 1];

    if (targetBucket === undefined) return null;

    let current = targetBucket.head;

    while (current !== null && key !== current.key) {
      current = current.nextNode;
    }

    return current;
  }

  set(key, value) {
    const hash = this.hash(key);
    let bucket = this.bucket[hash - 1];

    if (bucket === undefined) {
      const newList = this.addLinkedList(key, value);
      this.bucket[hash - 1] = newList;
    } else if (bucket !== undefined) {
      const current = this.findKey(key, hash);

      if (current !== null) {
        current.value = value;
      } else {
        const node = this.addNewNode(key, value);
        let current = bucket.head;

        while (current.nextNode !== null) {
          current = current.nextNode;
        }

        current.nextNode = node;
        bucket.tail = node;
        // this.toString(hash);
      }
    }
  }

  /********************/

  get(key) {
    const currentHash = this.hash(key);
    const currentKey = this.findKey(key, currentHash);

    if (currentKey === null) return null;
    else return currentKey.value;
  }

  /********************/

  /*
  • Hash key then pass key and hash into 'findKey'
  • Set 'findKey' to 'current' variable
  • If current !== null, return true (meaning key is in the hash map)
  • if current === null, return false (meaning key is NOT in the hash map)
  */

  has(key) {
    const currentHash = this.hash(key);
    const currentNode = this.findKey(key, currentHash);

    if (currentNode !== null) return true;
    else return false;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class Node {
  key = null;
  value = null;
  nextNode = null;
}
