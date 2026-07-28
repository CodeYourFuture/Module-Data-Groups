// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (let [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
// The current value is: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current value is: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value should be:
//{ "1" : "a", "2" : "b"}

// c) What does Object.entries return? Why is it needed in this program?
//Object.entries returns an array of a key-value pair. we need object.entries
// because we cannot directly loop over an object, so by using the method
// it turns it into an array we can loop over

// d) Explain why the current return value is different from the target output
//The current return uses a dot notation with the variable 'key', when we use a
// dot notation with a variable it doesn't get the value of the variable but
// instead uses the literal word as the key. when we change it to a bracket notation
// it reads the variable and uses that for the key, we however need to swap the return around and return value = key.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
