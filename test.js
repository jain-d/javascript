function joker (eddie) {
   eddie *= eddie;
   return eddie;
};
let jokerTwo = joker;
let see = jokerTwo(33);
console.log(see);
