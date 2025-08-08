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
// It returns { key: 1 } because it's using .key instead of [key].

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Returns { key: 2 } since it overwrites the same property each time.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Should be { "1": "a", "2": "b" } with keys and values swapped.

// d) What does Object.entries return? Why is it needed in this program?
// Returns [key, value] pairs from object. Needed to loop through keys and values.

// e) Explain why the current return value is different from the target output
// It uses .key instead of [value], so it's creating a property named "key" not using variable values.

// Test:
const testObj = { a: 1, b: 2 };
const inverted = invert(testObj);
console.log(inverted); // Should output { "1": "a", "2": "b" }
