// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) { //turn object into array of smaller arrays elements
    invertedObj[value]= key;
  }

  return invertedObj;
}
console.log(invert({ a: 1, b: 2 }))

// a) What is the current return value when invert is called with { a : 1 } // { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 } // { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2} // {'1':'a', '2':'b'}

// c) What does Object.entries return? Why is it needed in this program? // turn object into array of smaller arrays elements

// d) Explain why the current return value is different from the target output // because we have to swap key and value at line 13

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports = invert;