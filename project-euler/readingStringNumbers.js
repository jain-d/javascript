let strNumber = "sweetsixteen";

let words = ["one", "two", "three", "four", "five", "six", "seven"]

for (let word of words) {
   if (strNumber.includes(word)) {
      console.log(`found at ${strNumber.search(word)}`);
   }
   else {
      console.log(`not found ${word} anywhere in ${strNumber}`);
   }
}
