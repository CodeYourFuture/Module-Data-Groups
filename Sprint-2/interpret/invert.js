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
// console.log(invert({ a: 1 }));
// console.log(invert({ a: 1, b: 2 }));



// a) What is the current return value when invert is called with { a : 1 }
// ===> { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//  ===>{ key: 1 }
//      { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// ===> { "1": "a", "2": "b" }
// d) What does Object.entries return? Why is it needed in this program?

//===> Object.entries(obj) returns an array of key-value pairs, and this array can be easily iterated over.

// e) Explain why the current return value is different from the target output

// ===> The current return value is different from the target output because the code uses invertedObj.key = value; which sets a property
// literally named "key" on the object. Instead, it should use invertedObj[value] = key; to use the value as the property name and the key
// as its value, thus swapping keys and values as intended.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
module.exports = invert