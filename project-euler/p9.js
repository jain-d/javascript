function pythagoreanTriplet(number) {
   let a = Math.floor(Math.floor(number / 3) / 2);
   for (let i = a; i < number; i++) {
      for (let j = (i + 1); j < number; j++) {
         if ((i + j + (j + 1)) > number) {
            break;
         }
         for (let k = (j + 1); k < number; k++) {
            if ((i + j + k) > number) {
               break;
            }
            else if ((i + j + k) === number) {
               if (((i**2) + (j**2)) === (k**2)) {
                  return (i*j*k);
               } else {
                  continue;
               }
            }
         }
      }
   }
}

console.log(pythagoreanTriplet(120));
