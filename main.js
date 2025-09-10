#!/usr/bin/env node

import { HashMap } from "./hashmap.js";
import { HashSet } from "./hashmap.js";

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

// console.log(test.get("apple"));

// console.log(test.has("ice cream"));

// console.log(test.remove("jacket"));

// console.log(test.length());

// test.clear();

// console.log(test.keys());

// console.log(test.values());

// console.log(test.entries());

// test.set("moon", "silver");

// console.log(test.buckets);

const testSet = new HashSet();

testSet.set("Rama");
testSet.set("Sita");
testSet.set("Sam's Dev Lab");
testSet.set("Eric");
testSet.set("Margot");
testSet.set("Nick");
testSet.set("Lauren");
testSet.set("Betsy");
testSet.set("Roger");
testSet.set("Margaret");
testSet.set("Brittany");
testSet.set("Sarah");

// console.log(get("Rama"));

// console.log(testSet.has("Sam"));

// console.log(testSet.remove("Rama"));

// console.log(testSet.length());

// testSet.clear();

// console.log(testSet.keys());

// console.log(testSet.values());

// console.log(testSet.entries());

// testSet.set("Tom");

// console.log(testSet.length());

// console.log(testSet.buckets);
