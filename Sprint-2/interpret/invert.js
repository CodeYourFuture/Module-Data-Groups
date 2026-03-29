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

// It returns { key: 1 } because invertedObj.key always writes the word "key"

//---------------------------------------------------------------------------------------//

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// It returns { key: 2 } because it keeps overwriting the same "key" each time

//---------------------------------------------------------------------------------------//

// c) What is the target return value when invert is called with {a : 1, b: 2}

// It should return { "1": "a", "2": "b" } because the keys and values are swapped

//---------------------------------------------------------------------------------------//

// c) What does Object.entries return? Why is it needed in this program?

// Object.entries turns the object into an array like [["a", 1], ["b", 2]]
// We need it so we can loop through each key and value one by one

//---------------------------------------------------------------------------------------//

// d) Explain why the current return value is different from the target output

// Because invertedObj.key writes the word "key" literally
// instead of using the actual value as the key
// changing it to invertedObj[value] = key fixes this

//---------------------------------------------------------------------------------------//

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

// Fixed by changing invertedObj.key = value to invertedObj[value] = key
// Tests are written in invert.test.js


module.exports = invert;
