// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}*/

//------------------------------------------------------------------------------------------

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

//------------------------------------------------------------------------------------------

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

//------------------------------------------------------------------------------------------

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { '1': 'a', '2': 'b' }

//------------------------------------------------------------------------------------------

// c) What does Object.entries return? Why is it needed in this program?
//It returns,
/* [["a", 1],["b", 2]] 
  
  It is needed because the program needs to access both the key and the value of each object property in order to invert them. 
  Object.entries() gives us each key-value pair together, so we can swap them
  */

//------------------------------------------------------------------------------------------

// d) Explain why the current return value is different from the target output
/*The current return value is different from the target output because key is a variable, 
but invertedObj.key does not use the variable's value. 
In JavaScript, dot notation treats key as a literal property name, so it creates a property called "key" in the object. 
To use the value stored inside the key variable as the property name, we need bracket notation: invertedObj[key]. */

//------------------------------------------------------------------------------------------

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Invalid input");
  }

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
module.exports = invert;
