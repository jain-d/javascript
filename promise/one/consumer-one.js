import { c } from "../colors.js";
import { binaryValue } from "./creator-one.js";
console.log("\n");
binaryValue
   .then((data) => {
      console.log(data);
   })
   .catch((data) => {
      console.log(data);
   })
   .finally(() => console.log(`\n =========== ${c.yellow}Resolved${c.reset} ===========\n`));
