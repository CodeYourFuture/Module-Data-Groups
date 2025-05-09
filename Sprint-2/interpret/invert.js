// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//   }

//   return invertedObj;
// }
// console.log(invert({ a: 1, b: 2 }));
// a) What is the current return value when invert is called with { a : 1 }
// {key:1}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key:2}
// c) What is the target return value when invert is called with {a : 1, b: 2}
// {1 : a, 2: b}
// c) What does Object.entries return? Why is it needed in this program?
//It converts an object into an array of arrays, where each sub-array represents a key-value pair from the object.
//It is needed to iterate over the object's key-value pairs for creating the invertedObj.
// d) Explain why the current return value is different from the target output
//because invertedObj.key = value incorrectly sets a property named "key" on invertedObj instead of using the value as the key.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
// console.log(invert({ a: 1, b: 2 }));
module.exports = invert;
