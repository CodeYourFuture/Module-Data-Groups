// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj))
    throw new Error("Input is not a valid object");
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
console.log(invert({ a: 1, b: 2 }));

// a) What is the current return value when invert is called with { a : 1 }
//Ans: { key : 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//Ans: { key : 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Ans: { '1': 'a', '2': 'b'}

// c) What does Object.entries return? Why is it needed in this program?
//Ans: it returns a key/values pair that we need when swapping them for inverting an object

// d) Explain why the current return value is different from the target output
//Ans: it is different because when accessing the element using '.' operator after object instance,
//  we are calling the property name of object and not using the key name from the array in the loop

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
//fixed the implementation and have created a separate file in this directory for the tests

module.exports = invert;
