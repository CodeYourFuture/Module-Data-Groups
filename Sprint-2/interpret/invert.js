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
 // returns { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
 // returns { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
 // should return {1: a, 2: b}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of a given object's own enumerable string-keyed property key-value pairs.
// It is needed to loop through entries in 'obj' 

// d) Explain why the current return value is different from the target output
//  invertedObj.key = value; is creating a property named 'key' , to access the value stored in 'key' we use the bracket notation without quotes like this invertedObj[key]= value; If the property name comes from a variable → we always use bracket notation without quotes

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// implementation fixed and test passed 
