// Learning about Generators

function* makeAGenerator(start = 0, end = Infinity, step = 1) {
   let iterationCount = start;
   for (let i = start; i < end; i += step) {
      iterationCount+=step;
      yield i;
   }
   return iterationCount;
}

let myGenerator = makeAGenerator(7, 13, 2);
let count = 0;
while (true) {
   let inbound = myGenerator.next();
   console.log(inbound);
   count++;
   if (count === 8 || inbound.done) break;
}
