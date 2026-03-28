/**
// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}
*/

// a) What is the current return value when invert is called with { a : 1 }
/**
 * { key: 1 }
 * Because invertedObj.key = value sets a property literally named "key" to the value.
 */

// b) What is the current return value when invert is called with { a: 1, b: 2 }
/**
 * { key: 2 }
 * The loop runs twice, but each time it overwrites the "key" property. However, the last value (2) remains.
 */

// c) What is the target return value when invert is called with {a : 1, b: 2}
/**
 * { "1": "a", "2": "b" }
 */

// d) What does Object.entries return? Why is it needed in this program?
/**
 * Object.entries() returns an array of a given object's enumerable string-keyed property [key, value] pairs. For example:
 * Object.entries({ a: 1, b: 2 }) // returns [['a', 1], ['b', 2]]
 */

// d) Explain why the current return value is different from the target output
/**
 * The current implementation uses invertedObj.key = value which creates a property with the literal string "key" rather than using the variable key as the property name. To use the variable's value as the property name, we need bracket notation: invertedObj[value] = key.
 */

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Use bracket notation to set the property name to the value
    // and the property value to the original key
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
