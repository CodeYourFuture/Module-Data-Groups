// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
      invertedObj[value] = key; // Correctly assign the value as the key and the key as the value
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
//The return value will be { key: 1}because the invert function incorrectly assigns the value top proprty key of the invertod0bj

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//it will be { key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// It will be { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// It will be [["a", 1], ["b", 2]] and it is needed because it iterate over both keys and values of the object, allowing us to construct the inverted object correctly.

// d) Explain why the current return value is different from the target output
//The current return value is different from the target output because the implementation incorrectly uses invertedObj.
//key instead of assigning the key based on the value.
 //This results in always setting the property key to the last value processed in the loop.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
