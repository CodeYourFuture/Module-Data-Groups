// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // fixed: use value as key
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// Current return value (original code): { key: 1 }
// Correct return value (fixed code): { "1": "a" }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Current return value (original code): { key: 2 }
// Correct return value (fixed code): { "1": "a", "2": "b" }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Target return value: { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries converts the object into an array of [key, value] pairs, e.g., [["a",1],["b",2]].
// Needed to iterate over all key-value pairs so we can swap them in the new object.

// d) Explain why the current return value is different from the target output
// The original code uses `invertedObj.key` which is literally the string "key" instead of the variable value.
// This overwrites the same property each time, giving only the last value.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// See function above: use `invertedObj[value] = key;` to correctly swap keys and values.
