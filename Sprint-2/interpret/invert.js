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

// a) What is the current return value when invert is called with { a : 1 }
// 1 

// b) What is the current return value when invert is called with { a: 1, b: 2 }
///2

// c) What is the target return value when invert is called with {a : 1, b: 2}
//"1": "a", "2": "b" 

// c) What does Object.entries return? Why is it needed in this program?
//Object.entries({ a: 1, b: 2 })  // Returns: [["a", 1], ["b", 2]]
// It converts an object to an array of [key, value] pairs so you can loop through them.

// d) Explain why the current return value is different from the target output
// The bug is invertedObj.key = value — this literally creates a property named "key" 
// instead of using the variable key. Also, it should swap: value becomes key, key becomes value.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Use [value] as key, key as value
  }

  return invertedObj;
}

module.exports = invert;