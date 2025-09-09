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

  has(key) {
    const currentHash = this.hash(key);
    const currentNode = this.findKey(key, currentHash);

    if (currentNode !== null) return true;
    else return false;
  }

  /********************/

  remove(key) {
    const currentHash = this.hash(key);
    let targetBucket = this.bucket[currentHash - 1];
    if (targetBucket === undefined) return false;

    let current = targetBucket.head;
    let prev = null;

    while (current !== null && current.key !== key) {
      prev = current;
      current = current.nextNode;
    }

    if (current === null) {
      return false;
    } else if (prev === null && current.nextNode === null) {
      current = prev;
      this.bucket[currentHash - 1] = undefined;
      return true;
    } else if (prev === null && current.nextNode !== null) {
      current = current.nextNode;
      targetBucket.head = current;
      return true;
    } else if (prev !== null && current.nextNode !== null) {
      prev.nextNode = current.nextNode;
      current = null;
      return true;
    } else if (prev !== null && current.nextNode === null) {
      prev.nextNode = current.nextNode;
      targetBucket.tail = prev;
      return true;
    }
  }

  /********************/

  length() {
    let numberOfKeys = 0;
    this.bucket.forEach((index) => {
      let current = index.head;

      while (current !== null) {
        current = current.nextNode;
        numberOfKeys += 1;
      }
    });

    return numberOfKeys;
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
