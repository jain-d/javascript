function smallestMult(number) {
   let smallestMultiple;
   outer: for (let i = 2; Number.MAX_VALUE; i++) {
      let multiple = number * i;
      for (let j = 2; j < number; j++) {
         if (multiple % j !== 0) {
            break;
         }
         if (j === (number - 1)) {
            smallestMultiple = multiple;
            break outer;
         }
      }
   }
   return smallestMultiple;
}

console.log(smallestMult(20));
