// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value]=key;
  }

  return invertedObj;
}

console.log(Object.entries({"10": "x", "20": "y"}))

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Target return value { "1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries return an array of objects which is made up of the keys and the values of the Object passed into it.
// we need this array in order to assign key to value by using "invertedObj[value]=key"



// d) Explain why the current return value is different from the target output
// It is different because we need to use "invertedObj[value]=key" in place of     "invertedObj.key = value"

// To swap the keys and values in the object we need to use this line of code "invertedObj[value]=key"

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
