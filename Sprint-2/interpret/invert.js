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
//the current return value is { key: 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//the current return value is { key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
//the target return value is { '1': 'a', '2': 'b' }
// c) What does Object.entries return? Why is it needed in this program?
//Returns an array [key, value].we used it to iterate over the object and get the key and value of the object
// d) Explain why the current return value is different from the target output
//The current return value is different from the target output because the key and value are not swapped
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports = invert;
