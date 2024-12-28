// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  // Object.entries() is an object method that returns an array of the key-value pairs of an object
  for (const [key, value] of Object.entries(obj)) {
    // invertedObj.key cannot be used in this situation.
    // If you have the property name dynamically set, you should use square bracket notation.
    // Dot notation is used when you know the property name,
    // and it is not a variable or expression.
    // The variable "key" is dynamic.
    // Square-bracket notation should be used in place of dot notation.
    invertedObj[value] = key;
  }
  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { 1 : a, 2: b }

// c) What does Object.entries return? Why is it needed in this program?
// [ [ 'a', 1 ], [ 'b', 2 ] ]

// d) Explain why the current return value is different from the target output
// Dot notation is used on the invertedObj object, whereas square-bracket notation should be used. What is happening is that invertedObj.key, key is seen as the property name.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
