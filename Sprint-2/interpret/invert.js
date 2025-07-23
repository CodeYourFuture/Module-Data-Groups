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
}
  */

// a) What is the current return value when invert is called with { a : 1 }
/* 
{ key: 1 }
In the original function, the line invertedObj.key = value; creates a property 
literally named "key" instead of using the value of the variable key. 
So even though key = "a" in the loop, it doesn’t use it dynamically. 
JavaScript treats .key as a fixed property name. */

// b) What is the current return value when invert is called with { a: 1, b: 2 }
/* 
{ key: 2 }
 Again, the code uses .key instead of using key as a variable. 
 So the same "key" property is overwritten twice: first with 1, then with 2. 
 The final result keeps only the last value assigned. */

// c) What is the target return value when invert is called with {a : 1, b: 2}
/*
{ "1": "a", "2": "b" }
 This is the correct output for the invert function. 
 The goal is to flip the keys and values, so each value becomes a key, 
 and each key becomes a value. Since object keys must be strings, 
 the numbers 1 and 2 become "1" and "2" as keys.   */



// c) What does Object.entries return? Why is it needed in this program?

// Object.entries(obj) returns an array of [key, value] pairs from the object.
// For example:
Object.entries({ a: 1, b: 2 }) // ➜ [['a', 1], ['b', 2]]
/*
This method is useful for looping through both the key and value at once 
using destructuring ([key, value]). It's needed in this program because we 
want to access both parts of each entry to flip them in the new object.  */

// d) Explain why the current return value is different from the target output?
/*
The original function uses invertedObj.key = value;, which creates a property 
literally named "key" instead of using the actual variable key. 
This causes it to overwrite the same property each time in the loop.
To fix it, we need to use bracket notation: */
// invertedObj[value] = key;   
// This correctly swaps keys and values by using the variable values dynamically.  

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }
  return invertedObj;
}
module.exports = invert;

// We use invertedObj[value] = key; so the original value becomes the new key, 
// and the original key becomes the new value.



