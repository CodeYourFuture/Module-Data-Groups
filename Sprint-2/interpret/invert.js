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
module.exports = invert

// a) What is the current return value when invert is called with { a : 1 }
// {key: 1} because the invertedObj,ket = value does not use the variable key


// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key:2} the loop runs twice and the second iteration replaces the first one so the answer becomes 2

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value is to swap the keys and values so {a:1, b:2} becomes {1:a, 2:b}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries() turns an object into an array containing key-value pairs

// d) Explain why the current return value is different from the target output
// invertedObj.key means to create or access an object called key 
// and inverted invertedObj[key] means to use whatever value is stored in the key variable 
// e) Fix the implementation of invert (and write tests to prove it's fixed!)

