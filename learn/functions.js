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
// Again, object declarations even though are wrapped in a {}, they DO NOT CREATE their own lexical scope.

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
//
// more info can be found here on this claude chat ->  https://claude.ai/share/da3658a4-fcb3-497f-8bbc-439cf1d7e753



// EXAMPLE of object literals and object methods with this keyword-

// here we have an object with a method that is a traditional function
let testObj = {
   name: "John",
   age: 34,
   testFunction: function() {
      console.log(`${this.name} is ${this.age} years old`);
   }
}

// Now when the method of this object will be called, it will be as the following-
testObj.testFunction();
// here, the traditional function is called via the testObj method, so it will point to the testObj for it's value of name, if it has any.

         testObj.testFunction();
//         ^^^                               at the call site, the function is called by testObj, hence
//     this keyword will take the value of -> testObj


// for the following example, 
let anotherObj = {
   age: 34,                                                          // the object does does not have the value name, 
   testFunction: function() {
      console.log(`${this.name} is ${this.age} years old`);          // yet the function inside of it is calling for a value name with this.name
   }
}

let aThirdObject = {
   name: "Michael",
   age: 45
}

aThirdObject.testFunction = anotherObj.testFunction;

aThirdObject.testFunction();           // Output, "Michael is 45 years old", Because the call site was aThirdObject, therefore this keyword was pointing to that. Even though the function itself was defined elsewhere


// Now let do what we have been doing with arrow functions
let forthObj = {
   name: "Vincent",
   age: 40,
   testFunction: () => { console.log(`${this.name} is ${this.age} years old`); }
}

forthObj.testFunction();               // Output, "undefined is undefined years old", because the arrow function does not get the value of this from the CALL SITE

// Arrow functions gets their value of this from the lexical scope they were defined in

// But wait, the arrow function was defined inside of the object, so then WHY did it NOT fetch the value from there? 🤔
// This is because objects literal are enclosed in {} but they do not create a lexical scope of their own. 🤯
// So here the arrow function is actually looking at the module level for the values of name and age, which doesn't exist



