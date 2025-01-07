// OPERATORS

// Logical Operator     &&, || and ??
//
/* Apart from being used in conditionals, these logical operators are also used in expression part of an assignment, and this is where it can get confusing if not understood entirely. */

// AND && operator
/* The AND operator, when used as an expression, returns the last truthy value, or if it short circuits returns the current false value */
let monkey = true && 3 && "banana";          // <-- monkey variable stores "banana", because it is the LAST truthy value
monkey = true && 0 && "banana";              // <-- here, true and "banana" are both truthy, but the value stored in monkey will be 0, the current falsy value
monkey = false && 0 && "";                   // <-- now all values are falsy, but the operator will short circuit the first time it encounters a falsy value, which in this case is the first value itself. So the value monkey will hold is false.

// OR || operator
/* The OR operator behaves exactly OPPOSITE of the AND operator. It will return the last falsy value, or if it short circuits returns the first truthy value */
monkey = true || 3 || "banana";              // <-- now here, as soon as we encounter the first truthy value, OR operators short circuits and returns that truthy value. in this case, it is true.
monkey = false || 3 || "banana";             // <-- the first truthy value is 3, the value after this, "banana" is also truthy but we wont' reach there because, again, OR short-circuits at 3 and returns that.
monkey = false || 0 || "";                   // <-- this is where we go all the way till the end, because OR can not find a truthy value. And the last value "" is also a falsy and this is what it returned.


// NULLISH COALESCING ?? operator
/* The NULLISH COALESCING operator looks for the first value this is neither NULL nor UNDEFINED. It short circuits when it finds one, and returns that value. Else it returns the last undefined or null. */
monkey = 0 ?? true ?? "banana";              // <-- this will return 0 as the value because that the first value that is neither null nor undefined.
monkey = null ?? false ?? "banana";          // <-- this will return false as the value and the operator will short-circuit here.
monkey = null ?? undefined ?? null;          // <-- now here, the operator is looking for a value that is neither null nor undefined, but since it can not find it, it will return the last value it checked, which is null here.



// SPREAD Operator ...
/* Spread Operator is used to unpack the individual values of an iterable, and present them where zero or more individual values are needed.  */ 
let values = [3, 4];

const AddValues = (a, b) => a + b;

AddValues(...values);                        // <-- here, for the function AddValues, which takes two values, we pass the array by unpacking it values


// DESTRUCTURING
/* This is the process of unpacking values from an iterable and storing them directly into variables */
let fullName = ["John", "Wick"];
let [ firstName, lastName ] = fullName;      // <-- now in the variables firstName is stored "John" and "Wick" in lastName

