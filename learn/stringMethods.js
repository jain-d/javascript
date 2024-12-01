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

// INCLUDES, returns a boolean value based on the presence of the given character. 
console.log(`is , present in the sentence? ${sampleString.includes(",")}`);


// INDEXOF, give the first index of the perticular character if present in string, if it is not present -1 is returned
console.log(`first occurance of "n" is at index- ${sampleString.indexOf("n")}`);
//Can also start from a perticular index
console.log(`first occurance of "n" after index 5 ${sampleString.indexOf("n", 5)}`);

// LASTINDEXOF, give the last index of the give character, if absent returns -1
console.log(`last occurance of "n" is at index- ${sampleString.lastIndexOf("n")}`);

// SEARCH, similar to indexOf, it return the index of the given seach character, but can also utilize regular expression
console.log(`last occurance of "d" is at index- ${sampleString.search("d")}`);

// startsWith, returns a Boolean if a string starts with the give character
console.log(`does the string starts with "Bond"? ${sampleString.startsWith("Bond")}`);

// endsWith, returns a Boolean if a string ends with the give character
console.log(`does the string ends with "Sparrow"? ${sampleString.endsWith("Sparrow")}`);
