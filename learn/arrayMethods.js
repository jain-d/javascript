// Array Methods in JavaScript

let testArray = ["still", "wakes", "the", "deep"];

// Since array are nothing but objects, there is a special property in every array that can be accessed with . operator
// This special property is .length and it give us back the length of the Array.
console.log(testArray.length);

// AT, traversal of array with -1 indexes for last elements
console.log(testArray.at(-1));

// JOIN, converts an Array to a string with its concatenated separated by the defined separator.
let testJoin = testArray.join(" ");
console.log(`'${testJoin}'`);

// PUSH, added an element to the end of the Array.

