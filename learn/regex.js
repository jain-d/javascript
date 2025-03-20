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

// for taking care of a range of numbers/alphabets, we enclose them in square brackets.
"2e4".replace(/[0-9]/, "");      // `e4`      // this will replace 2, which is the first character for this string

// if we add a plus after a + symbol after the character, or range of character, all of those instances directly followed by the first instance will be replaced too.
"23e4".replace(/[0-9]+/, "");               // `e4`, it is kind of like /../g, but for consecutive characters only


