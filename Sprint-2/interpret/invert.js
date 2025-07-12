// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

console.log(invert({ a: 1, b: 2 }));

*/

// a) What is the current return value when invert is called with { a : 1 }

// ... currently gives { key: 1 } 

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// ... currently gives { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// ... should be { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?

// ... Object.entries returns an array of key-value pairs from the object, which allows us to iterate over them easily.

// d) Explain why the current return value is different from the target output 

// ... The current implementation incorrectly assigns the value to the key property of invertedObj instead of using the value as a key in invertedObj. fixed by using invertedObj[value] = key;

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

console.log(invert({ a: 1 }));
console.log(invert({ a: 1, b: 2 }));

module.exports = invert;