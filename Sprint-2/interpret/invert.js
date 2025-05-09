// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
Answer: 
{ key: 1 }


// b) What is the current return value when invert is called with { a: 1, b: 2 }
Answer:
{ key: 2 }


// c) What is the target return value when invert is called with {a : 1, b: 2}
Answer:
{ "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?
Answer:
Object.entries(obj) returns an array of [key, value] pairs from the object:

// d) Explain why the current return value is different from the target output
Answer:
The current implementation of the invert function does not dynamically set keys and values in the result object. Specifically, the line:
invertedObj.key = value;
Mistake: The code is setting a property named "key" on the invertedObj instead of using the key variable's value from the for loop.
Effect: The output is incorrect because it does not swap the actual keys and values of the input object. Instead, it overwrites the property key in invertedObj.

// e) Fix the implementation of invert (and write tests to prove it's fixed!*/

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Dynamically assign value as the key and key as the value
  }

  return invertedObj;
}

module.exports = invert;
