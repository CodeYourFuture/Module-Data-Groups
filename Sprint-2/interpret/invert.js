// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Input must be an object");
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//{1:a}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Multiple key-value pairs
// { '1': 'a', '2': 'b' }
// c) What is the target return value when invert is called with {a : 1, b: 2}
//{ '1': 'a', '2': 'b' }
// c) What does Object.entries return? Why is it needed in this program?
// Object.entries({ a: 1, b: 2 })
// Output: [ ['a', 1], ['b', 2] ]// 
// d) Explain why the current return value is different from the target output
// The current implementation attempts to use for...of directly on an object, which is not iterable. Additionally, the logic inside the loop (obj[key]) is incorrect since key itself is undefined due to the initial error.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)

  console.log(invert({ a: 1 })); // Expected: { 1: "a" }


// Test: Inverts an object with multiple key-value pairs
console.log("Test 2: Multiple key-value pairs");
try {
  const result = invert({ a: 1, b: 2 });
  console.log(result); // Expected: { 1: "a", 2: "b" }
} catch (error) {
  console.error(error.message);
}

// Test: Inverts an object with string values
console.log("Test 3: String values");
try {
  const result = invert({ a: "x", b: "y" });
  console.log(result); // Expected: { x: "a", y: "b" }
} catch (error) {
  console.error(error.message);
}

// Test: Handles objects with duplicate values
console.log("Test 4: Duplicate values");
try {
  const result = invert({ a: 1, b: 1 });
  console.log(result); // Expected: { 1: "b" } (Last key takes precedence)
} catch (error) {
  console.error(error.message);
}

// Test: Returns an empty object when passed an empty object
console.log("Test 5: Empty object");
try {
  const result = invert({});
  console.log(result); // Expected: {}
} catch (error) {
  console.error(error.message);
}

// Test: Throws an error when passed a non-object
console.log("Test 6: Non-object input");
try {
  const result = invert(null);
  console.log(result);
} catch (error) {
  console.error(error.message); // Expected: "Input must be an object"
}

try {
  const result = invert(42);
  console.log(result);
} catch (error) {
  console.error(error.message); // Expected: "Input must be an object"
}

try {
  const result = invert(["a", "b"]);
  console.log(result);
} catch (error) {
  console.error(error.message); // Expected: "Input must be an object"
}