let factors = [];
function factorsOf(number) {
   for (let i = 1; i <= Math.floor(number / 2); i++) {
      if (number % i === 0) {
         if (factors.includes(i)) break;
         if (i != number/i)
            factors.push(i, (number/i));
         else
            factors.push(i);
      }
   }
   factors.sort((a, b) => a - b);
   return factors;
}

function largestPrimeFactorsOf(number) {
   let factors = factorsOf(number);
   factors.sort((a, b) => b - a);
   for (let entry of factors) {
      if (isPrime(entry)) {
         return entry;  
      }
   }
}

function isPrime(number) {
   let flag = true;
   for (let i = 1; i <= Math.floor(number / 2); i++) {
      if (i == 1) continue;
      if (number % i == 0) {
         flag = false;
         break;
      }
   }
   return flag;
}

console.log(largestPrimeFactorsOf(2));
