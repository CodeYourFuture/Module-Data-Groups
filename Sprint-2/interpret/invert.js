// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// Swaps the keys and values of an object.
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 } — the literal string "key" is used as the property name.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 } — each iteration overwrites the same "key" property.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" } — values become keys and keys become values.

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of [key, value] pairs.
// It is needed because for...of cannot iterate over plain objects directly.

// d) Explain why the current return value is different from the target output
// The bug uses dot notation (invertedObj.key), which creates a literal property called "key".
// Bracket notation (invertedObj[value]) uses the variable's value as the property name instead.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Bracket notation allows using the value as a property name
    invertedObj[value] = key;
  }

  return invertedObj;
}

// Testing the fix with console.log
console.log(invert({ a: 1 })); // Expected: { "1": "a" }
console.log(invert({ a: 1, b: 2 })); // Expected: { "1": "a", "2": "b" }
console.log(invert({ x: 10, y: 20 })); // Expected: { "10": "x", "20": "y" }
