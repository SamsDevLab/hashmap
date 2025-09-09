#!/usr/bin/env node

export class HashMap {
  constructor() {
    this.loadFactor = 0.8;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
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

    return hashCode;
  }

  // toString(hash) {
  //   let list = this.buckets[hash - 1];

  //   let current = list.head;
  //   let totalStr = "";

  //   while (current !== null) {
  //     totalStr += `( ${current.key} ) -> `;
  //     current = current.nextNode;
  //   }

  //   totalStr += "null";
  //   console.log(totalStr);
  // }

  /********************/

  checkCapacity() {
    const totalStoredPairs = this.length();
    const totalCapacity = this.loadFactor * this.capacity;

    if (totalStoredPairs > totalCapacity) {
      this.capacity = this.capacity * 2;
      const allEntriesArr = this.entries();
      this.buckets = new Array(this.capacity);

      allEntriesArr.forEach((bucket) => {
        this.set(bucket[0], bucket[1]);
      });
    }
  }

  /********************/

  findKey(key, hash) {
    const targetBucket = this.buckets[hash - 1];

    if (targetBucket === undefined) return null;

    let current = targetBucket.head;

    while (current !== null && key !== current.key) {
      current = current.nextNode;
    }

    return current;
  }

  /********************/

  set(key, value) {
    const hash = this.hash(key);
    let bucket = this.buckets[hash - 1];

    if (bucket === undefined) {
      const newList = this.addLinkedList(key, value);
      this.buckets[hash - 1] = newList;
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
      }
    }
    this.checkCapacity();
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
    let targetBucket = this.buckets[currentHash - 1];
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
      this.buckets[currentHash - 1] = undefined;
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
    this.buckets.forEach((index) => {
      let current = index.head;

      while (current !== null) {
        current = current.nextNode;
        numberOfKeys += 1;
      }
    });

    return numberOfKeys;
  }

  /********************/

  clear() {
    const arr = this.buckets;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== undefined) {
        arr[i] = undefined;
      }
    }
  }

  /********************/

  keys() {
    const arr = [];

    this.buckets.forEach((index) => {
      let current = index.head;

      while (current !== null) {
        arr.push(current.key);
        current = current.nextNode;
      }
    });

    return arr;
  }

  /********************/

  values() {
    const arr = [];

    this.buckets.forEach((index) => {
      let current = index.head;

      while (current !== null) {
        arr.push(current.value);
        current = current.nextNode;
      }
    });

    return arr;
  }

  /********************/

  entries() {
    const arr = [];

    this.buckets.forEach((index) => {
      let current = index.head;

      while (current !== null) {
        const miniArr = [];
        miniArr.push(current.key, current.value);
        current = current.nextNode;
        arr.push(miniArr);
      }
    });

    return arr;
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
