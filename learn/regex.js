// Regular Expressions is JavaScript.

let searchPattern = "arecurring recurringmrecurringeanrecurring inrecurringgrecurringfrecurringurecurring lrecurring recurringWrecurring";

// Regular expression are defined in a within 2 foward slashes /
let regex = /a/;
searchPattern = searchPattern.replace(regex, "");
console.log(searchPattern);

// a Regex can have special character/flags after the second slash, which tell it how to perform the match. 
// for example, the g flag tell the search till the end, even after a match is found.
regex = /recurring/g;
searchPattern = searchPattern.replace(regex, "");
console.log(searchPattern);

// the i flag is for case insensitive match

// we also have character classes in regex that represent character(s) of a perticular kind.
// for example, for digits we have \d, for whitespace we have \s 
// the /d would match any digit is encounters
regex = /\s/g;
searchPattern = searchPattern.replace(regex, "");
console.log(searchPattern);

// 
