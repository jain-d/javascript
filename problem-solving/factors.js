let factors = [];

function factorsOf(number) {
   for (let i = 2; i <= number/2; i++) {
      if (number % i === 0) {
         factors.push(i, (number/i));
      }
   }
   console.log(factors);
}

factorsOf(30);
