import { readdir } from "node:fs/promises";
var fs = require('node:fs');

/*
// Basic file reading operation with NODE
fs.readFile('./test.txt', 'utf8', (err, contents) => {
   if (err) {
      console.log(`the following error was encountered=> ${err}`);
      return;
   }
   let contentArray = contents.trim().split('\n');
   let testArray =  ["old", "new", "used"];
   console.log(testArray);
   console.log(contentArray.length);
})
*/


/*
// Basic file reading operation with BUN
let fileContents = Bun.file("./car.json");

let cleansedContents = await fileContents.json();

for (let content of cleansedContents) {
   console.log(content.name);
}
*/



// Reading contents of a directory with BUN
let files = await readdir("./test-dir", { recursive: true });

let markUpFiles = files.filter(file => file.endsWith(".html"));

for (let file of markUpFiles) {
   console.log(file);
}
