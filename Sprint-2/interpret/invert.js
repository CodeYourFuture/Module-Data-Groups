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

// The current return value is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// The current return value is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// The target return value is { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?

/* 
Object.entries returns an array of an object's key and value pairs. Each pair is seen as an array, where the first element is the key and the second element is the value.
It's needed because it makes it easy to loop through both keys and values of an object directly. Without it, the code would be more complex.
*/

// d) Explain why the current return value is different from the target output

// The current return value is wrong because the key and value are not swapped properly. The value is being overwritten by the key instead.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("Invalid input: expected an object.");
  }
  
  const invertedObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      invertedObj[obj[key]] = key; 
    }
  }

  return invertedObj;
}

module.exports = invert;


// Test Cases:

test("inverts a simple object", () => {
  expect(invert({c: 1, d: 2})).toEqual({1: 'c', 2: 'd'});
});


test("inverts an object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("inverts an object with string values", () => {
  expect(invert({ y: "code", z: "programming" })).toEqual({ code: "y", programming: "z" });
});

test("inverts an empty object", () => {
  expect(invert({})).toEqual({});
});

test("handles duplicate values (last key wins)", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" });  
});
