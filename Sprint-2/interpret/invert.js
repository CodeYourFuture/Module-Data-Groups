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
// the current return value is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// current return value is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target return value is { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key-value pairs from the object. It is needed 
// in this program to iterate over each key-value pair in the object so that we can
// swap them and create a new inverted object.

// d) Explain why the current return value is different from the target output
// I think current return value is different from the return value because the
//  current implementation is not really swapping the properties of the object.
//  Instead, it is just creating a new property called "key" and assigning the 
// value to it. The target output requires us to swap the keys and values, which
//  is not happening in the current implementation.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
console.assert(
  JSON.stringify(invert({ a: 1 })) === JSON.stringify({ "1": "a" }),
  "Test 1 failed"
);

console.assert(
  JSON.stringify(invert({ a: 1, b: 2 })) ===
    JSON.stringify({ "1": "a", "2": "b" }),
  "Test 2 failed"
);
