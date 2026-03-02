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
// The target output should swap keys and value, therefore the output using Node REPL is { '1': 'a', '2': 'b' }
// After fixing the bug in the code. The values become keys, and the keys become the values. 
// Object keys are stored as strings. 

// c) What does Object.entries return? Why is it needed in this program?

// d) Explain why the current return value is different from the target output

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
