let initialGrid = 8;
let flip = false;
console.log();
for (let outer = 0; outer < initialGrid; outer += 1) {
   for (let inner = 0; inner < initialGrid; inner += 1) {
      if (flip) {
         let character = Boolean(inner % 2) ? " " : "#";
         process.stdout.write(character);
      } else {
         let character = Boolean(inner % 2) ? "#" : " ";
         process.stdout.write(character);
      }
   }
   console.log();
   flip = flip ? false : true;
}
