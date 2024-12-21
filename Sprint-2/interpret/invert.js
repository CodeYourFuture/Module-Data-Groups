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
//The current return value is { key: 1 }. This is because the code incorrectly assigns the value to the property "key".
//The key here is like a literal string "key", not the actual variable value ('a').

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//The current implementation produces: { key: 2 }
//This result happens because the loop overwrites invertedObj.key on each iteration, leaving only the last value.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
//Object.entries takes an object and returns an array of arrays, each inner array contains two elements:
//The key of the object as a string.
//The value associated with that key.

// d) Explain why the current return value is different from the target output
//The code created a property called "key" in invertedObj for every iteration, 
//This results in overwriting property (key) repeatedly

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

console.assert(JSON.stringify(invert({ a: 1 })) === '{"1":"a"}');
console.assert(JSON.stringify(invert({ a: 1, b: 2 })) === '{"1":"a","2":"b"}');
console.assert(JSON.stringify(invert({ x: 10, y: 20 })) === '{"10":"x","20":"y"}');
console.assert(JSON.stringify(invert({})) === '{}');
console.assert(JSON.stringify(invert({ name: "Amy" })) === '{"Amy":"name"}');

console.log("All tests passed!");

