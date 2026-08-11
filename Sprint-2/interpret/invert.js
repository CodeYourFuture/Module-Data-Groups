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
console.log(invert({ a: 1 }));
//return value is { key : 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
console.log(invert({ a: 1, b: 2 }));
//return value is { key : 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// target return value: {"1" : "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
//each key-value pair will form an array in a bigger array (array of arrays of key-value pairs)

// d) Explain why the current return value is different from the target output
/* issues:
- .key notation naming the key "key"
- we only assign the key to value, but not reversing it
*/

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
