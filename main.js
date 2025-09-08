#!/usr/bin/env node

import { HashMap } from "./hashmap.js";

const hashMap = new HashMap();

// console.log(hashMap.hash("Rama"));
// console.log(hashMap.hash("Sita"));

hashMap.set("Rama", "This hash is for Rama");
hashMap.set("Sita", "This new hash is for Sita");
hashMap.set("maRa", "This new hash is for maRa");

// console.log(hashMap.hash("maRa"));
// hashMap.toString();

// console.log(hashMap.bucket);
