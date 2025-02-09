function largest(numArray) {
  if (numArray.length === 0) {
      return -Infinity;
   }
   let lastExit = numArray.pop();
   let secondNumb = largest(numArray);
   return lastExit > secondNumb ? lastExit : secondNumb;
}

console.log(largest([95, 75, 85, 35, 45, 65]));
