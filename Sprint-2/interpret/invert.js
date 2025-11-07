// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
console.log(invert({ a: 1 }));    
// The current return value is { key: 1 }


// b) What is the current return value when invert is called with { a: 1, b: 2 }
console.log(invert({ a: 1, b: 2 }));
// The current return value is { key: 2 }


// c) What is the target return value when invert is called with {a : 1, b: 2} 
// The target return value is { "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of a key, value pairs, and also an object to array of arrays
// It is needed in this program to access and iterate over the key value pairs of the object,allowing us to process both the property names and their corresponding values.


// d) Explain why the current return value is different from the target output
/*The current return value is different from the target output 
because in line 13 the invertedObj.key is assigning the string "key" as a property name, Not the actual value of the key variable.*/


// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// Tests
console.log(invert({ a: 1 }));    
console.log(invert({ a: 1, b: 2 })); 
