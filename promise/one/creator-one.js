// we create the promise here
import {c} from "../colors.js";

export let binaryValue = new Promise((resolve, reject) => {
   setTimeout(() => {
      let destiny = Math.floor((Math.random() * 10));
      if (destiny % 2 === 0)
         resolve(`${c.green}SUCCESS${c.reset} ${destiny}`);
      else
         reject(`${c.red}FAILED${c.reset} ${destiny}`);
   }, 1000);
});


