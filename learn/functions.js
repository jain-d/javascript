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
addEventListener("click", aCallback);






// ARROW FUNCTIONS v TRADITIONAL FUNCTIONS, THIS KEYWORD and LEXICAL SCOPING
// To understand each of these, we need to first understand lexical SCOPING


// LEXICAL SCOPING
// As mostly understood, a function, arrow or traditional has create a lexical scope of its own.
// Futher, loops, if - else block and try - catch block create their lexical scope of their own as well.
// Class Bodies, for most cases, create their own lexical scope.

// But

// Object literals DO NOT create lexical scope. With their use of curly braces, it might look like they have a lexical scope, but don't.


// Now


// THIS KEYWORD
// In a non pedantic manner, consider this as an object tracker or pointer. Where ever used in an execution context, it kind of say which object should I look at to grab this particular property. If the object it uses to find this property, and that object does not have that property, we get undefined.
// this is an object tracker.
// the value of this is available at all times in a javascript code, the only matter is where is this at that point of time, pointing to.


// THIS in TRADITIONAL FUNCTIIONS
// For traditional functions, this keyword grabs it's value from the CALL SITE(where the function's called) of the traditional function.
// If it is called from some object, then that object becomes the target the this keyword inside the function.
// If the function is called from the global scope, then the global obj, will become the target of the this inside the function.
// The key is, `this` is obtained from the CALL SITE.


// THIS in ARROW FUNCTIONS
// for arrow functions, the value of THIS is obtained from the LEXICAL SCOPE that it is defined in. Not the call site, but the LEXICAL SCOPE.
// And again, object literals do not have their own lexical scopes.
