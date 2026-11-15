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

console.log(invert({ x: 10, y: 20 }));

// a) What is the current return value when invert is called with { a : 1 }
//  - undefined.     

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//  - undefined. 

// c) What is the target return value when invert is called with {a : 1, b: 2}
//  - "{1" : "a", ""2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
//  - It turns object properties into an array of key-value pairs

// d) Explain why the current return value is different from the target output
//  - line 13 is accessing the property 'key' name directly
//  -  the target output is to swap properties inside the variable 'key' and 'value'

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
