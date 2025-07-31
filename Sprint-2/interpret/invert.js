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

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// {"1":"a"}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {"1":"a" , "2":"b"}
// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1":"a" , "2":"b"}
// c) What does Object.entries return? Why is it needed in this program?
// entries method used for converting the object to an array object as key, value pair.
// d) Explain why the current return value is different from the target output
// current return value is actual return of function and target output is expected.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// I created separated test file

