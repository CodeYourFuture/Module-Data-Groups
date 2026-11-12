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
//console.log(invert({ f: 34, h: 45, j: "rf" }));
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }

// ===> the current return value is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// ===> the current return value is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// ===> the target return value is {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?

// ===> Object.entries return the key and value of an object, and in this program we used it to go through each key value pair and to put them in an array

// d) Explain why the current return value is different from the target output

// ===> first it used the dot notation instead of square bracket which is accessing the property using  a literal name
// ===> second it is not inverted it still uses key value instead of value key so that it returns the inverted one

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

// ===> I have fixed the program
