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
// a) The current return value is { key: 1 } because the key is not being used correctly in the assignment.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// b) The current return value is { key: 2 } because the last assignment overwrites the previous one, and the key is not being set correctly.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// c) The target return value is { "1": "a", "2": "b" } because the keys and values should be swapped.

// c) What does Object.entries return? Why is it needed in this program?
// c) Object.entries returns an array of key-value pairs from the object, which is needed to iterate over the object's properties and swap keys and values.

// d) Explain why the current return value is different from the target output
// d) The current return value is different from the target output because the key is not being set correctly in the inverted object. Instead of using the value as the key and the key as the value, it incorrectly assigns the key as a static string "key".

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Correctly assign value as key and key as value
  }

  return invertedObj;
}

module.exports = invert;

// Helper function to compare objects (shallow comparison)
function objectsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
// Test cases
const testCases = [
  { input: { a: 1 }, expected: { "1": "a" } },
  { input: { a: 1, b: 2 }, expected: { "1": "a", "2": "b" } },
  { input: { x: 10, y: 20 }, expected: { "10": "x", "20": "y" } },
  { input: { a: "hello", b: "world" }, expected: { hello: "a", world: "b" } },
  { input: { a: 1, b: 1 }, expected: { "1": "b" } }, // last key wins
];
// Run tests
testCases.forEach(({ input, expected }, index) => {
  const result = invert(input);
  const pass = objectsEqual(result, expected);
  console.log(`Test ${index + 1}:`, pass ? "✅ PASS" : "❌ FAIL");
  if (!pass) {
    console.log("  Input:", input);
    console.log("  Expected:", expected);
    console.log("  Got:", result);
  }
});

