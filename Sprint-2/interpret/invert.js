// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Input must be a non-null object");
  }
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//Only the last value remains, so it returns:
//{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// as it is a built in method Object.entries returns an array of [key, value] pairs.
//It is needed so we can loop through both keys and values easily.

// d) Explain why the current return value is different from the target output
//Because the code uses invertedObj.key (a literal property named "key") instead of using the variable key.
//It overwrites the same property instead of swapping keys and values

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
