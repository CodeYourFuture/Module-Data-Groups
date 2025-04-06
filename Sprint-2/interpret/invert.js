// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj [value] = key;
  }
  return invertedObj;
}


// a) What is the current return value when invert is called with { a : 1 }
console.log(invert({ a: 1 }));         // Expected: { "1": "a" }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
console.log(invert({ a: 1, b: 2 }));   // Expected: { "1": "a", "2": "b" }
// c) What is the target return value when invert is called with {a : 1, b: 2}

// the same with b)

// d) Explain why the current return value is different from the target output
console.log(invert({ x: 10, y: 20 })); // Expected: { "10": "x", "20": "y" }
// e) Fix the implementation of invert (and write tests to prove it's fixed!)


console.log(invert({ a: 1 }));         // Expected: { "1": "a" }
console.log(invert({ a: 1, b: 2 }));   // Expected: { "1": "a", "2": "b" }
console.log(invert({ x: 10, y: 20 })); // Expected: { "10": "x", "20": "y" }
console.log(invert({}));
