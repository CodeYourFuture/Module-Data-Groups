// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 } Because `invertedObj.key = value` uses the literal string "key" instead of the variable `key`.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 } Each iteration overwrites the same "key" property, so only the last value remains.

// c) What is the target return value when invert is called with { a: 1, b: 2 }
// { "1": "a", "2": "b" }

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries(obj) returns an array of [key, value] pairs: [["a",1], ["b",2]] This allows us to easily iterate over each key-value pair and swap them (key becomes value, value becomes key).

//e) Explain why the current return value is different from the target output
// Because the original code uses a fixed string property (`invertedObj.key = value`) instead of using the dynamic variable `key`.
// This overwrites the same property and doesn’t produce the correct inverted object.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
// See below:

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj[value] = key; // dynamic key assignment
//   }

//   return invertedObj;
// }
