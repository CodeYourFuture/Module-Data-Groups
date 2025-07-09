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
let object = {a:1,b:2}
console.log((invert)(object))

module.exports= invert
// a) What is the current return value when invert is called with { a : 1 }
// Current return value is {key: 1}, I was expecting {"1":"a"}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//// Current return value is {key: 2}, I was expecting {"1":"a", "2":"b"}

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{"1":"a", "2":"b"}
// c) What does Object.entries return? Why is it needed in this program?
// Object.entries is creating an array of key-value pairs.

// d) Explain why the current return value is different from the target output
/*The target output swaps the keys and values. But in the current function,
 the line invertedObj.key = value creates a property named "key" literally, 
 instead of using the variable key from the key-value pair. 
 This means it doesn’t use the actual key from the object, so the output is wrong.
 To swap keys and values properly, we need to use bracket notation (invertedObj[value] = key) 
 so that the value of the variable value is used as the property name.

*/




// e) Fix the implementation of invert (and write tests to prove it's fixed!)
