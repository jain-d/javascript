// Array Methods in JavaScript

let testArray = ["still", "wakes", "the", "deep"];

// Since array are nothing but objects, there is a special property in every array that can be accessed with . operator
// This special property is .length and it give us back the length of the Array.
console.log(testArray.length);

// AT, traversal of array with -1 indexes for last elements
console.log(testArray.at(-1));

// JOIN, converts an Array to a string with its concatenated separated by the defined separator.
console.log("\n\nJOIN");
let testJoin = testArray.join(" ");
console.log(`'${testJoin}'`);

// PUSH, added the specified element to the end of the Array and return the total new Length


// POP, removes an element from the end, and returns it


// SHIFT, removes the first element of the array and returns it
console.log("\n\nSHIFT");
console.log(testArray.shift());
console.log(testArray);

// UNSHIFT, add the specified element to the start of the arrray and returns the new length
console.log("\n\nUNSHIFT");
console.log(testArray.unshift("the"));
console.log(testArray);

// SPLICE, adds and removes elements form an Array, and return the deleted element
console.log("\n\nSPLICE");
testArray.splice(0, 1, "still")
console.log(testArray);
