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

module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
// The current return value when invert is called with { a : 1 } is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// When calling invert({ a: 1, b: 2 }); the loop runs twice, the first iteration outputs invertedObj.key = 1l
// The second iterations overwrites the first, so the current value returned is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target output should swap keys and value, therefore the output (using Node REPL) after the fix is { '1': 'a', '2': 'b' }
// After fixing the bug in the code. The values become keys, and the keys become the values. 
// Object keys are stored as strings. 

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries({ a: 1, b: 2}) return [["a", 1]], ["b", 2]]
// It is needed because objects are not iterable with for...of, but the entries array is, so we can loop key/value pairs.

// e) Explain why the current return value is different from the target output
// In the code (before the bug fix) invertedObj.key = value creates a literal property called "key" each time, overwriting it.
// It does not use the variable key/value for dynamic property names, so it can't swap keys and values correctly.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
