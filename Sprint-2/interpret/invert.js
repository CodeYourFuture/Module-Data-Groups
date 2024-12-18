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
console.log(invert({ a : 1, b: 2 }))

// a) What is the current return value when invert is called with { a : 1 }
// It will return {key: 1};

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// It will return {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}

// It will return {key: 2}

// c) What does Object.entries return? Why is it needed in this program?

// It is used to return the key-value pairs of an object in order to access them easily like array iteration.

// d) Explain why the current return value is different from the target output

// It returns incorrect values of the object because the assignment method is treating key as a string rather than an object.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
