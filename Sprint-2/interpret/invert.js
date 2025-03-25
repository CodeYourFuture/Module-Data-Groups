// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}
  */

// a) What is the current return value when invert is called with { a : 1 }
// The current return value is: { key: 1}      The literal string "key" is being set as a property, and it return that.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Here also, the last key-value pair in the loop (b: 2) overwrites the earlier one (a: 1), so the return value is:  { key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target behavior swaps keys and values, so the desired output must be: { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries() method returns an array of key-value pairs from an object, like in the following case:
// Object.entries({ a: 1, b: 2 });
// Output: [["a", 1], ["b", 2]]
// It is needed in this program because this will allow iteration over the key-value pairs of the object using a for...of loop

// d) Explain why the current return value is different from the target output
/* 
In the line:    

invertedObj.key = value;

The word key is treated as a literal string, not as the variable key from the loop. 
This means every time the loop runs, it overwrites the same property called "key" in the object, 
instead of using the actual value of the variable key (like "a" or "b").

WHAT WE WANT TO HAPPEN: 
Is to use  the variable key to create a new property in the object for each loop iteration.
For this to work, we must use bracket notation ([]).  

invertedObj[value] = key; 

EXAMPLE:  
         1- Using invertedObj.key = value:   , this will evaluate to:   invertedObj = { key: 1};
         2- Using invertedObj[value] = key:  , will evaluate to:  invertedObj = { "1": "a" };
*/

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// The correct implementation is: 

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Dynamically assign the swapped key-value pair
    invertedObj[value] = key;
  }

  return invertedObj;
}

// **Tests**
console.log(invert({ a: 1 }));               // Expected: { "1": "a" }
console.log(invert({ a: 1, b: 2 }));         // Expected: { "1": "a", "2": "b" }
console.log(invert({ x: 10, y: 20, z: 30 })); // Expected: { "10": "x", "20": "y", "30": "z" }


//OUTPUT AS EXPECTED: 
/*

{ '1': 'a' }
{ '1': 'a', '2': 'b' }
{ '10': 'x', '20': 'y', '30': 'z' }

*/