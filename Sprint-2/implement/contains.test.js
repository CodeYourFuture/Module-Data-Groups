const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false
console.log("Empty object test:", contains({}, "a")); // false

// Given an object with properties
// When passed to contains with an existing property name
console.log("Existing property test:", contains({ a: 1, b: 2 }, "a")); // true

// Given an object with properties
// When passed to contains with a non-existent property name
console.log("Non-existent property test:", contains({ a: 1, b: 2 }, "c")); // false

// Given invalid parameters like an array
// When passed to contains
console.log("Array input test:", contains([], "a")); // false
console.log("Null input test:", contains(null, "a")); // false
