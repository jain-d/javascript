// String are IMMUTABLE in JavaScript. All operations performed with these methods return an new string, original string is not affected.
let sampleString = "Bond, James Bond";

// LENGTH
console.log(sampleString.length);

// AT, used to access a specific character of the string based on index. Negative index starts searching in reverse();
console.log(sampleString.at(-1));

// SLICE, slices a string from the given 2 indexes. If only one index is given, the slices till the end.
console.log(sampleString.slice(-4));
console.log(sampleString.slice(6, 12));

// TRIM, remove whitespaces from the beginning and the end of the string.
let stringWithSpaces = "  string with spaces   "
console.log(`'${stringWithSpaces.trim()}'`);

// TRIMSTART
console.log(`'${stringWithSpaces.trimStart()}'`);

// TRIMEND
console.log(`'${stringWithSpaces.trimEnd()}'`);

// PADSTART, PADEND, adds 
let toBeMasked = "9309" 
console.log(`${toBeMasked.padStart(10, "x")}`);

// REPLACE, replace the given string with other
console.log(`${sampleString.replace("Bond", "Jules")}`);

// REPLACEALL, replaces all the instances of the given string with the new one.
console.log(`${sampleString.replaceAll("Bond", "Jules")}`);

// SPLIT, split a string from the given separator
let generatedArray = "Still Wakes the Deep".split(" ");
console.log(generatedArray);


// TOUPPERCASE & TOLOWERCASE, 
console.log(sampleString.toUpperCase());
console.log(sampleString.toLowerCase());

// Searching an array, https://www.w3schools.com/js/js_string_search.asp/

