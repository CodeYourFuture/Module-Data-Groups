// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj[value] = key;
//   }

//   return invertedObj;
// }
function invert(obj) {
  const invertedObj = {};

  for (const key in obj) {
    invertedObj[obj[key]] = key; // <-- this is correct
  }

  return invertedObj;
}

console.log(invert({ a: 1 })); // {1: "a"}
console.log(invert({ a: 1, b: 2 })); // {1: "a", 2: "b"}
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// The current return value is {'1': 'a'}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current return value is {'1': 'a', '2': 'b'}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value is {1: "a", 2: "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries takes an object and return an array of key-value pairs.
// it needed because it converts the object into an array of [key, value] pairs which makes it easy to loop over both key and value at the same time.

// d) Explain why the current return value is different from the target output
// because it returns the [key, value] of an object in reverse order [value,key]

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
