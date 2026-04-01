// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

//function invert(obj) {
//  const invertedObj = {};

//  for (const [key, value] of Object.entries(obj)) {
//    invertedObj.key = value;
//  }

//  return invertedObj;
//}

// a) What is the current return value when invert is called with { a : 1 }
//  { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//  { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//  {"1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
/* Object.entries returns an array of the object in pairs [key, value]. It is needed in this program
  to iterate through the object and access both the key and value at the same time, which is necessary
   for swapping them in the inverted object. */

// d) Explain why the current return value is different from the target output

/*The current return value is different from the target output because the implementation of the invert 
function is incorrect. Instead of using the variable key to set the property in the inverted object, 
it is using the literal string "key". This means that every time a key-value pair is processed, 
it overwrites the same property "key" in the inverted object, resulting in only the last key-value 
pair being stored. To fix this, we need to use bracket notation to set the property in the inverted object 
using the value as the key and the key as the value.*/

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

console.log(invert({ a: 1 })); // { "1": "a" }
console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
console.log(invert({ x: 10, y: 20 })); // { "10": "x", "20": "y" }
