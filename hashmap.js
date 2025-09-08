#!/usr/bin/env node

export class HashMap {
  constructor() {
    this.loadFactor = 0.8;
    this.capacity = 16;
    this.bucket = new Array(this.capacity);
  }

  //   addLinkedList(key, value) {
  //     const list = new LinkedList();

  //     const node = this.addNewNode(key, value);

  //     list.head = node;
  //     list.tail = node;

  //     return list;
  //   }

  //   addNewNode(key, value) {
  //     const node = new Node();
  //     node.key = key;
  //     node.value = value;

  //     const nextNode = node.nextNode;

  //     return { key, value, nextNode };
  //   }

  //   hash(key) {
  //     let hashCode = 0;

  //     const primeNumber = 31;
  //     for (let i = 0; i < key.length; i++) {
  //       hashCode = primeNumber * hashCode + key.charCodeAt(i);
  //       hashCode = hashCode % this.capacity;
  //     }

  //     return hashCode % 16;
  //   }

  //   toString(hash) {
  //     let list = this.bucket[hash - 1];

  //     let current = list.head;
  //     let totalStr = "";

  //     while (current !== null) {
  //       totalStr += `( ${current.key} ) -> `;
  //       current = current.nextNode;
  //     }

  //     totalStr += "null";
  //     console.log(totalStr);
  //   }

  /********************/

  /*
    Pseudocode:
    ✅ • When 'set' is called, create a key/value pair.
    ✅ • The 'key' is passed into the hash function and will return a hash
    ✅ • The 'hash' will determine where the value is placed in the bucket
    ✅ • If there isn't a linked list in the bucket already, create one
        ✅ • This will be the first condition
    ✅ • If the bucket is NOT undefined, you'll want to first traverse the
    LinkedList to try to locate the key.
    ✅ • If you LOCATE the key, you'll overwrite the value
    ✅ • If you DON'T LOCATE the key, you'll add a new node to the linked list
    and set it as the tail
*/

  //   findKey(key, hash) {
  //     const targetBucket = this.bucket[hash - 1];
  //     let current = targetBucket.head;

  //     while (current !== null && key !== current.key) {
  //       current = current.nextNode;
  //     }

  //     return current;
  //   }

  //   set(key, value) {
  //     const hash = this.hash(key);
  //     let bucket = this.bucket[hash - 1];

  //     if (bucket === undefined) {
  //       const newList = this.addLinkedList(key, value);
  //       this.bucket[hash - 1] = newList;
  //     } else if (bucket !== undefined) {
  //       const current = this.findKey(key, hash);

  //       if (current !== null) {
  //         current.value = value;
  //       } else {
  //         const node = this.addNewNode(key, value);
  //         let current = bucket.head;

  //         while (current.nextNode !== null) {
  //           current = current.nextNode;
  //         }

  //         current.nextNode = node;
  //         bucket.tail = node;
  //         this.toString(hash);
  //       }
  //     }
  //   }
}

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
// }

// class Node {
//   key = null;
//   value = null;
//   nextNode = null;
// }
