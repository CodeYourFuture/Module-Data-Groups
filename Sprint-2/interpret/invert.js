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
obj = { a: 1, b: 2 };
module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
// answer ===> the output will be {"key": 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// answer ===> the output ll be {"key": 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// answer ===> the output ll be {"1": "a", "2": "b"};

// c) What does Object.entries return? Why is it needed in this program?
// answer ===> converts an object into an array of key-value pairs, we need it to loop through and access the elements.

// d) Explain why the current return value is different from the target output
// answer ===>  because of this line --> invertedObj.key = value; as it creates a "key" and assign the value to it. and with variables we need to use bracket notation not dot notation.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// I have fixed the implementation: from invertedObj.key = value to invertedObj[value] = key;
