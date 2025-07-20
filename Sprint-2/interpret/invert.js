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
//console.log(invert({a : 1}))
// The return value is { key: 1 }. This happened because invertedObj.key = value is using dot notation, which creates a property called "key" instead of using the actual value of the variable key. To fix this, we need bracket notation. 



// b) What is the current return value when invert is called with { a: 1, b: 2 }
//console.log(invert({ a: 1, b:2 }));
//The return value is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//The target return value is { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
//The Object.entries() method returns an array of the key/value pairs of an object.

// d) Explain why the current return value is different from the target output
//first we need to use bracket notation in order to get access to the value of key variable. then we need to store them in a different variable to be able to swap the key and value pair 

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    let newKey = value;
    let newValue = key;
    invertedObj[newKey]= newValue
  }

  return invertedObj;
}

console.log(invert({ x: 10, y: 20 }));