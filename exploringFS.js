var fs = require('node:fs');

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
