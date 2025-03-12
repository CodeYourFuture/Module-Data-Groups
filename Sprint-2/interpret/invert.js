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

const input = { x: 10, y: 20 };
const expectedOutput = { 10: "x", 20: "y" };
console.assert(
  JSON.stringify(invert(input)) === JSON.stringify(expectedOutput),
  "Test failed: When invert is passed this object, it should output { '10': 'x', '20': 'y' }"
);

console.log("Test passed if no assertion errors appear!");

// We can also use console.log to test
console.log(invert(input));

// a) What is the current return value when invert is called with { a : 1 }
// The returned values is : {key: 1}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The returned values is : {key: 2}
// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return is : { "1": "a", "2": "b" }
// c) What does Object.entries return? Why is it needed in this program?
// Object.entries is used to iterate over the key-value pairs in the object.
// d) Explain why the current return value is different from the target output
// The current return value is different from the target value, because the program does not swap keys with the values instead, the program incorrectly assigns a fixed property name "key" to the object.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Implementation done.
