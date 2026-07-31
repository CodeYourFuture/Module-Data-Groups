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
  */

// a) What is the current return value when invert is called with { a : 1 } - The current return value is { key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 } - The current return value is { key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2} - The target return value is { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
/* Object.entries(obj) returns an array of [key, value] pairs. Example: Object.entries({ a:1, b:2 }) returns [["a", 1], ["b", 2]].
It is needed because the loop "for (const [key, value] of Object.entries(obj))" let's each pair destructure easily.
*/

// d) Explain why the current return value is different from the target output - It is because this line "invertedObj.key = value;" uses literal string "key instead of the variable key" which is a wrong property name,
// instead of this "invertedObj[value] = key;"

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
