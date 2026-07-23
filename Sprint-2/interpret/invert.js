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

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// c) What does Object.entries return? Why is it needed in this program?

// d) Explain why the current return value is different from the target output

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

// this are the answers:

// a) Return value for { a: 1 }
// { key: 1 }

// b) Return value for { a: 1, b: 2 }
// { key: 2 }

// c1) Target return value for { a: 1, b: 2 }
// { "1": "a", "2": "b" }

// c2) What does Object.entries return? Why is it needed?
// What it returns: An array of key-value pairs (as two-element arrays), e.g., [["a", 1], ["b", 2]].
// Why it’s needed: It lets us easily loop through both keys and values at the same time using for (const [key, value] of Object.entries(obj)).

// d) Why the current return value is different from target output
// The line invertedObj.key = value; uses dot notation, which treats "key" as a literal property name on the object instead of using the variable key.

// Furthermore, to invert the object, the value needs to become the new key and the old key needs to become the new value.

// Because dot notation was used:

// Every loop iteration overwrote invertedObj["key"] with the variable value.

// The key/value assignment was backwards.

// e) Fixed Implementation & Tests
// Fixed invert.js
// Use bracket notation [value] to dynamically set the property name:

function invert(obj) {
  // Guard clause for safety
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return {};
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}


