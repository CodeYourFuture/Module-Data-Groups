// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
/* 
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

console.log(invert({ a: 1 }));             
console.log(invert({ a: 1, b: 2 })); 

a) What is the current return value when invert is called with { a : 1 }
{ key: 1 } Adds a property named "key" literally, instead of using the variable key.

b) What is the current return value when invert is called with { a: 1, b: 2 }
{ key: 2 } Same issue —  replaces the "key" property every time, so only the last one (b: 2) remains.

c) What is the target return value when invert is called with {a : 1, b: 2}
{ "1": "a", "2": "b" } Each value becomes a key, and each key becomes a value.

d) What does Object.entries return? Why is it needed in this program?
It returns an array of key-value pairs.
It's useful for looping through the key-value pairs of the object to swap over.

e) Explain why the current return value is different from the target output
Because the code is using "key" as a literal property name, not the value of the key variable.

f) Fix the implementation of invert (and write tests to prove it's fixed!)
By using bracket notation we can use the value of the variable 'value' as the property name in the object. 
This correctly inverts keys and values.
*/

// Fixed Implementation
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// console.log(invert({ a: 1, b: 2, c: 1, d: 1}));