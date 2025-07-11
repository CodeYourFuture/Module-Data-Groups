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

//19 a) What is the current return value when invert is called with { a : 1 }
//      After the function invert() is called with the parameter { a : 1 }, it returns: { key : 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//      After the function invert() is called with the parameter { a: 1, b: 2 }, it returns: { key : 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
//      After the function invert() with the parameter { a: 1, b: 2 }, the target return value is: { 1 : a , 2 : b }
// c) What does Object.entries return? Why is it needed in this program?
//      Object.entries return an Array of key-value pair arrays from obj. It is useful but not strictly necessary. 
// d) Explain why the current return value is different from the target output
//      Because in the line 13 the invertedObj.key statement is not using the value of the key variable. 
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
//    Done!
module.exports = invert;
