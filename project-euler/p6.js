function sumSquareDifference(number) {
   let sumOfSquares = 0;
   let squareOfSums = 0;
   for (let i = 1; i <= number; i++) {
      sumOfSquares += (i ** 2);
      squareOfSums += i;
   }
   return ((squareOfSums ** 2) - sumOfSquares);
}

console.log(sumSquareDifference(100));
