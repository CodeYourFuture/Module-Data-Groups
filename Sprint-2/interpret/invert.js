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
// {key : 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key : 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries() returns an array of an object's own enumerable string-keyed property [key, value] pairs. 
// It is needed in this program because the invert function needs access to both the original keys and values 
// so it can swap them and create a new inverted object.

// d) Explain why the current return value is different from the target output
// The current return value is different from the target output because invertedObj.key = value uses the word "key" as the property
// name instead of using the actual key variable. It stores the values under the same property name "key", 
// so it does not swap the original key and value. The correct code should use invertedObj[value] = key to create value:key pairs.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports = invert;
