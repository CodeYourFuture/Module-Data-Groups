// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}*/

//fixed code:
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // use the value as key, key as value
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
  //  { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
  // { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
  //{ "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?
  /*Object.entries(obj) returns an array of [key, value] pairs.
Needed because we want to loop through keys and values at the same time.*/

// d) Explain why the current return value is different from the target output

/*Because the code is wrong in one place:

invertedObj.key = value;


This uses the word "key" as a property name instead of using the variable key.

So instead of creating:

{ 1: "a" }


it always creates:

{ key: 1 }


and for multiple items, it keeps overwriting the same "key" */


// e) Fix the implementation of invert (and write tests to prove it's fixed!)
    // I did write upt there.