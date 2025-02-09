// Factorial
function recursiveFactorial(number: number) {
   if (number === 1)
      return 1;
   else
      return number * recursiveFactorial(number - 1);
}
console.log(`\nfactorial, expecting: 5040, actual: ${recursiveFactorial(7)}`);


// Sum of Digits
function sumOfDigits(number: number) {
   if (number <= 0)
      return 0;
   else
      return number % 10 + sumOfDigits(Math.floor(number / 10));
}
console.log(`\nsum of digits, expecting: 45, actual: ${sumOfDigits(1234567890)}`);

/*
// Second Largest in an Array
function findLargest(numArray: number[]) {
   let largest: number = 0;
   if (numArray.length === 0)
      return 0;
   else {
      let exitNumber: number = numArray.pop();
      return exitNumber > findLargest(numArray) ? exitNumber : findLargest(numArray);    
   }
}
console.log(`\nsecond Largest in Array, expection: 95, actual: ${secondLargest([45, 75, 95, 25, 55, 65])}`);
*/


// Largest
function fL(numArray: number[]) {
   if (numArray.length === 0)
      return 0;
   let exitNumber = numArray.pop();
   let secondNumber = fL(numArray);
   console.log(secondNumber);
   return exitNumber > secondNumber ? exitNumber : secondNumber;
}
console.log(`\n Largest in Array, expection: 95, actual: ${fL([ 75, 95, 25, 55, 65])}`);
