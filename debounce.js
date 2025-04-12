// 2627 Debounce

/* so, we will have a function, that we will need to debounce */

function willBeDebounced(someNumber) {
   console.log("\n\t=========");
   console.log("\tThis will be debounced");
   console.log("\t--------");
   console.log(`\tValue received ${someNumber}`);
   console.log("\t=========\n");
}

let timer = 100;

var debounce = function(someFunction, t) {
   let existingCall;
   return function(...args) {
      if (existingCall === undefined) {
         existingCall = setTimeout(someFunction, t);
      } else {
         clearTimeout(existingCall);
         existingCall = setTimeout(someFunction, t);
      }
   } 
}



let specialFunction = debounce(willBeDebounced);

setInterval(() => specialFunction("TEST"), timer);
