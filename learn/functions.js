// Functions in JavaScript

// Function Expressions
/* these are unnamed function defination that are either used to store value of as a part of an assignment, or are created and scheduled for later execution, or for immediate execution with IIFE. */

// an example of function expression, here the function is assigned to the variable funcExpr 
let funcExpr = function() { /* function body */ };

// the function expression, used here as an IIFE(Immediately Invoked Function Expression), as the name suggests this anonymous function is IMMEDIATELY INVOKED(CALLED)
(function() {
   console.log("Example of and IIFE");
})();

// IIFE are often used for later execution, with setTimeout or addEventListener
button.addEventListener("click", function() { /* function body */ });

// CallBack function, is a function that is sent as an arguments

