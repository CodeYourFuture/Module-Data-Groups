// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // invertedObj.key = value;
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//It should return {key: 1}, because we are declaring a key and value as "key" and "value" respectively, on line 13
console.log(invert({ a : 1 })); // Expected output: {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//It should return an object with single key value pair where key is 2 because it updates on the second time when we run through the loop
console.log(invert({ a: 1, b: 2 })); // Expected output: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// It should return { 1: "a", 2: "b" }
console.log(invert({ a: 1, b: 2 })); // Expected output: { 1: "a", 2: "b" }

// c) What does Object.entries return? Why is it needed in this program?
//It returns an array of arrays where each inner array contains a key-value pair from the object. It is needed in this program because we need to iterate over each key-value pair in the object and assign the value as the key and the key as the value in the new object.
console.log(Object.entries({ a: 1, b: 2 })); // Expected output: [["a", 1], ["b", 2]]

// d) Explain why the current return value is different from the target output
//The current return value is different from the target output because we are not swapping the keys and values in the object. We are only assigning the value as the key and the key as the value in the new object. We need to swap the keys and values in the object to achieve the target output.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports = invert;