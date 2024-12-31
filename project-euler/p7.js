function nthPrime(number) {
   let count = 0;
   for (let i = 2; i < Number.MAX_VALUE; i++) {
      if (isPrime(i)) {
         count++;
         if (count === number) {
            return i;
         }
      }
   }
}
function isPrime(number) {
   if (number === 2) return true;
   for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
      if (number % i === 0) {
         return false;
      }
   }
   return true;
}

console.log(nthPrime(10001));
