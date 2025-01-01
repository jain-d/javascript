function primeSummation(number) {
   let summation = 0;
   for (let i = 2; i < number; i++) {
      if (i === 2) {
         summation += i;
         continue;
      }
      for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
         if (i % j === 0) {
            break;
         }
         if (j === Math.ceil(Math.sqrt(i))) {
            summation += i;
         }
      }
   }
   return summation;
}
console.log(primeSummation(2001));
