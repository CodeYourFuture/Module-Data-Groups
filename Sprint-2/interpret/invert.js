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
//When invert({ a: 1 }) is called, the loop assigns the value 1 to a property  literally named key. Therefore, the function returns { key: 1 }.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
//{ 1: "a", 2: "b" }
// c) What does Object.entries return? Why is it needed in this program?
// It returns the key value pairs in separate arrays. It's needed in this program so we can access the keys and values separately.
// d) Explain why the current return value is different from the target output
// It uses dot notation (invertedObj.key), which creates a property called key. It doesn't use the original value as the new property name, so the keys and values aren't swapped correctly.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
