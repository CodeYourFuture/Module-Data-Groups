// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//answer:{ key: 1 }


// b) What is the current return value when invert is called with { a: 1, b: 2 }
//answer:{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//answer:{ "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?

//Object.entries(obj) returns an array of [key, value] pairs from the object:

// d) Explain why the current return value is different from the target output
//In the loop, the code is using invertedObj.key = value instead of setting the value dynamically with invertedObj[value] = key. 
//As a result, only the last key-value pair is stored with the same static key ("key").


// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
module.exports = invert;