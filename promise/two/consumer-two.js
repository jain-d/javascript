import { c } from "../colors.js";
import { binaryValue } from "./creator.js";

console.log("\n");

try {
   let message = await binaryValue;
   console.log(message);
} catch (error) {
   console.log(error);
}
