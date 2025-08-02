// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  // Loop through each key in the original object
  for (const key in obj) {
    const value = obj[key];

    // Use square bracket notation to set the new key and value
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// Answer: { key: 1 } before fix, now correctly returns { "1": "a" }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: { key: 2 } before fix, now correctly returns { "1": "a", "2": "b" }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Answer: Object.entries returns an array of [key, value] pairs. It helps if you want to use array destructuring in loops, but we used a for...in loop here.

// d) Explain why the current return value is different from the target output
// Answer: The issue was using dot notation like `invertedObj.key = value`.
// That sets the literal property "key" instead of using the value of the variable `key`.
// Square brackets (invertedObj[value]) let us use dynamic keys.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Done above: fixed with square bracket notation, and used a simple loop to swap keys and values

module.exports = invert;

