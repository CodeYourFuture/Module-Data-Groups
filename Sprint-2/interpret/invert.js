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
console.log(invert({ a: 1 }));
console.log(invert({ a: 1, b: 2 }));

// a) What is the current return value when invert is called with { a : 1 }
// ans: { key: 1 }  when invert is called instead of swap because it treated key as literal string. It will always return key instead of actual value.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//ans: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//ans: { '1': 'a', '2': 'b' }

// c) What does Object.entries return? Why is it needed in this program?
//ans: Object.entries return an array of key-value pairs from the object.
//Object.entries(obj) allows looping through each key-value pair, it give access to the key and value to reverse.

// d) Explain why the current return value is different from the target output
// In line 14 invertedObj.key = value; is always setting the property named "key", instead of using the variable key dynamically. IT is treating key as literal string instead of actual key.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports = invert;
