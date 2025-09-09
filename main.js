#!/usr/bin/env node

import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// 'Get' Method
// console.log(test.get("apple"));

// 'Has' Method
// console.log(test.has("ice cream"));

// 'Remove' Method
// console.log(test.remove("jacket"));

// 'Length' Method
// console.log(test.length());

// 'Clear' Method
// test.clear();

// 'Keys' Method
// console.log(test.keys());

// 'Values' Method
// console.log(test.values());

// 'Entries' Method
// console.log(test.entries());

// Test Capacity
// test.set("moon", "silver");

console.log(test.buckets.length);
