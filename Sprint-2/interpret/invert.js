// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}


// a) What is the current return value when invert is called with { a : 1 }
//{ key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{ "1": "a", "2": "b" }

// d) What does Object.entries return? Why is it needed in this program?
//Object.entries({ a: 1, b: 2 }) 


// e) Explain why the current return value is different from the target output
Object.entries({ a: 1, b: 2 }) 

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Correctly assigns the value as a key
  }

  return invertedObj;
}

module.exports = invert;
