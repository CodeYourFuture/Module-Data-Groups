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
// invertedObj.key = value; this line creates a key literally with name "key". it returns {key : 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// every time it meets the key and reassign it, so {key : 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// to swap pair key-value with each other. should return {1 : a, 2: b}

// c) What does Object.entries return? Why is it needed in this program?
// it returns key-value pairs in arrays nested of array. we need Object.entries to convert key-value pairs to array because for..of doesn't work with objects. 
//I wonder if we could solve the function by swapping key-value using [key, value] = [value, key] in some way? p.s. I'll delete this comment after review:)

// d) Explain why the current return value is different from the target output
// invertedObj.key = value; this line creates a key literally with name "key". it returns {key : 1}

// e) Fix the implementation of invert (and write tests to prove it's fixed!)


module.exports = invert;