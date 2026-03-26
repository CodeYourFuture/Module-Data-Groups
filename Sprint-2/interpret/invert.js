// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// The current value before fix is {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current value before fix is {key: 2} since it overrides the previous value

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value should have been {"1": "a","2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns the array of [key, value] pairs
// For eg: Object.entries({a: 5, b: 7})
// returns: [["a", 5], ["b", 7]]
// It is needed since it allows to Loop through both key and value at the same time.

// d) Explain why the current return value is different from the target output
// The current return value is different from the target output since "key" is treated as a literal property name. We need to use variable value as the key

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Done
