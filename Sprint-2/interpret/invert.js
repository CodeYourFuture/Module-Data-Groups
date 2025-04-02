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

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// c) What does Object.entries return? Why is it needed in this program?

// d) Explain why the current return value is different from the target output

// e) Fix the implementation of invert (and write tests to prove it's fixed!)



//MY RESPONSE: // a) What is the current return value when invert is called with { a : 1 }
// With the current implementation, the function will return an object like this:
// { key: 1 }
// This happens because the line `invertedObj.key = value;` incorrectly assigns the string "key" as the key of the object, instead of dynamically assigning the value of `key` from the original object.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current implementation will return:
// { key: 2 }
// This is because the loop will overwrite the `key` in `invertedObj` for each entry in the original object. As a result, only the last key-value pair (`b: 2`) is captured with the `key` being overwritten.


// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target output should be:
// { "1": "a", "2": "b" }
// We expect to swap the keys and values, so the original key becomes the value and vice versa.


// c) What does Object.entries return? Why is it needed in this program?
// `Object.entries(obj)` returns an array of arrays where each inner array represents a key-value pair from the object. 
// For example, `Object.entries({ a: 1, b: 2 })` would return `[["a", 1], ["b", 2]]`.
// It is used in this program because it allows us to loop through the object and access both the key and value, which are required for swapping the key-value pairs.


// d) Explain why the current return value is different from the target output
// The current return value is incorrect because we are mistakenly assigning the string `"key"` as the key in the `invertedObj` object, 
// instead of using the actual `key` from the original object. This means that the values from the original object are not properly inverted.


function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Swap the key and value
  }

  return invertedObj;
}

module.exports = invert;

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

// Test cases to prove the implementation works

test("invert on an object with one key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" }); // Correctly swaps keys and values
});

test("invert on an object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" }); // Correctly swaps keys and values
});

test("invert on an object with numeric keys", () => {
  expect(invert({ 1: "a", 2: "b" })).toEqual({ "a": "1", "b": "2" }); // Swaps correctly for numeric keys
});

test("invert on an object with string values", () => {
  expect(invert({ a: "apple", b: "banana" })).toEqual({ "apple": "a", "banana": "b" }); // Correctly swaps strings as values
});

test("invert on an empty object", () => {
  expect(invert({})).toEqual({}); // An empty object should return another empty object
});
