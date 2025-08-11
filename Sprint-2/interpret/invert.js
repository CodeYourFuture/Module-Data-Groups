// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (obj === null || obj === undefined) {
    throw new Error("Input cannot be null or undefined");
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
console.log(invert({a : 1, b : 2}));

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 } 
// {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {key: 2}

// c) What does Object.entries return? Why is it needed in this program?
// it returns an array of keys and values from an object - for iterating through object

// d) Explain why the current return value is different from the target output
// because in this line "invertedObj.key = value;" it sets a property with name key not the value of the key

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
