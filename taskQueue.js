function one() {
   setTimeout(() => {
      console.log("This is Async");
   }, 0);
   console.log("This function one");
   two();
}
function two() {
   console.log("This is function 2");
   three();
}
function three() {
   console.log("This if function 3");
   setTimeout(() => console.log(`Second async`), 0);
}
one();
