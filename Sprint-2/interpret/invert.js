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

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }

//{ key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }

//{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

//{ "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?

// Object.entries(obj) returns an array of key-value pairs from the object.
// Object.entries({ a: 1, b: 2 });
// returns: [["a", 1], ["b", 2]]
//It is needed so we can loop through both the keys and values of the object at the same time.

// d) Explain why the current return value is different from the target output

//The current implementation is incorrect because it uses:
// invertedObj.key = value;
// This creates a property literally called "key" instead of using the actual key/value dynamically.
//So it overwrites the same property each time instead of building the correct object.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
