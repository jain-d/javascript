function largestPalindromeProduct(n) {
   let palindromes = [];
   let startingValue = 10 ** n - 1;
   let lowerBound = 10 ** (n - 1);
   for (let i = startingValue; i >= (10 ** (n - 1)); --i) {
      for (let j = startingValue; j >= lowerBound; --j) {
         let product = i * j;
         if (isPalindrome(product)) {
            if (!palindromes.includes(product)) {
               palindromes.push(product)
            }
            lowerBound = j;
            break;
         }
      }
   }
   palindromes.sort((a, b) => b - a);
   return palindromes[0];
}

function isPalindrome(number) {
   let reverse = +(number.toString().split("").reverse().join(""));
   if (reverse === number) {
      return true;
   }
   return false;
}

console.log(largestPalindromeProduct(2));

console.log(largestPalindromeProduct(3));
