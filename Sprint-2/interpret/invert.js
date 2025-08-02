// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (obj.length === 0) {
    return obj;
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// invert({ a: 1 });

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// invert({ a: 1, b: 2 });

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
/*
Using Object.entries() allows you to use a for...of loop 
 to access both keys making it easy to swap them when creating a new object.
 */

// d) Explain why the current return value is different from the target output

//Because in the line 13 the invertedObj.key statement
// is not using the value of the key variable.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
