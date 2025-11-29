// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  // Checked for non-object input (optional, but robust)
  if (typeof obj !== "object" || obj === null) {
    return invertedObj;
  }

  for (const [key, value] of Object.entries(obj)) {
    // Used bracket notation to dynamically set the value as the new key,
    // and assign the original key as the new value.
    invertedObj[value] = key;
  }

  return invertedObj;
}
/*
// a) What is the current return value when invert is called with { a : 1 }
invert({ a: 1 }); // returns: { key: 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
invert({ a: 1, b: 2 }); // returns: { key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
{ "1": "a", "2": "b" }
// c) What does Object.entries return? Why is it needed in this program?
Object.entries({ a: 1, b: 2 }) // returns: [["a", 1], ["b", 2]]
//Each entry is a [key, value] pair. Needed because we want to iterate over keys and values simultaneously in a for...of loop.
// d) Explain why the current return value is different from the target output
// Because you wrote invertedObj.key instead of using the dynamic key from the variable value. invertedObj.key creates a property literally named "key", not the value of the variable key.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
*/
