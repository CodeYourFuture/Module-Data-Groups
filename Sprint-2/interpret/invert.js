// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
/*

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}
*/
/* a) What is the current return value when invert is called with { a : 1 }

{ key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }

{ key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}

{ "1": "a", "2": "b" }
// d) What does Object.entries return? Why is it needed in this program?

Object.entries(obj) returns an array of an object's own key-value pairs as [key, value] tuples (e.g., Object.entries({ a: 1, b: 2 }) returns [['a', 1], ['b', 2]]).

It is needed here so we can loop over both the property name (key) and its corresponding value (value) at the same time using array destructuring (const [key, value]).

// e) Explain why the current return value is different from the target output

There are two critical issues in the current loop
1. Static property assignment instead of dynamic lookup;
The code writes invertedObj.key = value. Using dot notation literally creates/overwrites a single key named "key" on the object every single iteration. 
To use the variable's value dynamically as the object key, you must use bracket notation: invertedObj[value].

2. Flipped key and value;
The target output asks to swap keys and values (so values become keys and keys become values). The original code assigns value to the object's key position, 
rather than assigning key to the position indexed by value (invertedObj[value] = key). */

// f) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  // Guard clause for non-object inputs
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return {};
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Use bracket notation to dynamically set the property name to 'value'
    // and assign 'key' as its value
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
