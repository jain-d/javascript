import {c} from "./colors.js";
/*
setInterval(() => {
   let randomNumber = Math.floor(10 * Math.random());
   if (randomNumber !== 0)
      console.log(`\t${c.red}${randomNumber}${c.reset}`);
}, 0.5e3);
*/

let iterations = 6;
let pastValue = 0;
while (iterations) {
   let randomNumber;
   while (true) {
      randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber === pastValue) {
         continue;
      } else {
         break;
      }
   }
   process.stdout.write(` ${c.orange}${randomNumber}${c.reset}`);
   pastValue = randomNumber;
   iterations--;
}
