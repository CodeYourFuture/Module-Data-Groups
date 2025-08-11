// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Correctly set the value as the key and key as the value
  }

  return invertedObj;
}


// a) What is the current return value when invert is called with { a : 1 }
// It returns { 1: "a" }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// It returns { 1: "a", 2: "b" }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// It returns { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries({ a: 1, b: 2 });
// Returns: [['a', 1], ['b', 2]]

// d) Explain why the current return value is different from the target output
// invertedObj.key calls makes the string "key" the key because dot notation is used

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports = invert;  // Export the function to be used in tests