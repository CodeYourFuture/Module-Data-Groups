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
// It returns { 1: "a" } — the value 1 becomes the key and the key "a" becomes the value.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// It returns { 1: "a", 2: "b" } — both pairs are swapped correctly.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value is { "1": "a", "2": "b" } — keys and values are swapped,
// and since object keys are always strings, the numbers become string keys.

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of [key, value] pairs from the object.
// e.g. Object.entries({ a: 1, b: 2 }) returns [ ["a", 1], ["b", 2] ]
// It is needed here because for...of cannot iterate over a plain object directly,
// so Object.entries converts it into an iterable array of pairs we can loop through.

// d) Explain why the current return value is different from the target output
// The original bug used invertedObj.key = value which always sets a literal property
// named "key" on the object instead of using the variable's value as the property name.
// So every iteration overwrote the same "key" property, giving { key: lastValue }.
// The fix is invertedObj[value] = key which uses the value as a dynamic property name.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// The fix has been applied above — invertedObj[value] = key correctly swaps keys and values.
// Tests:
console.assert(JSON.stringify(invert({ a: 1 })) === JSON.stringify({ 1: "a" }), "Test 1 failed");
console.assert(JSON.stringify(invert({ a: 1, b: 2 })) === JSON.stringify({ 1: "a", 2: "b" }), "Test 2 failed");
console.assert(JSON.stringify(invert({ x: 10, y: 20 })) === JSON.stringify({ 10: "x", 20: "y" }), "Test 3 failed");
console.assert(JSON.stringify(invert({})) === JSON.stringify({}), "Test 4 failed");
console.log("All tests passed!");
