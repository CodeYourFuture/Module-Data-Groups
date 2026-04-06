// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    //create new keys  and values to make them dynamic
    let newKey = String(value);
    let newValue = String(key);
    invertedObj[newKey] = newValue;
  }

  return invertedObj;
}
console.log("Hello");
console.log(invert({ a: 1, b: 2 }));
// before update
console.log(invert({ a: null }));// returns nothing
console.log(invert({ a: undefined })); // returns nothing


module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
//Answer: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//Answer: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//Answer: { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Answer:[ ["a", 1], ["b", 2] ].
// It turns an object into an array of pairs.
// It is needed so you can loop through both key and value easily.

// d) Explain why the current return value is different from the target output
// The current return value is different because it uses a fixed property name "key", so each loop overwrites the previous value, resulting in only one property.
// The target output correctly swaps keys and values, creating a new property for each key-value pair.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
