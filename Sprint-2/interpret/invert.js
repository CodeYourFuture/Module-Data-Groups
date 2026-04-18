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
console.log(invert({ a: 1 }));
console.log(invert({ a: 1, b: 2 }));
console.log(invert({ a: 1, b: 2 }));

// a) What is the current return value when invert is called with { a : 1 }
// the current output value of this invert is {key:1}.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
/*  the current output value of this invert is {key:2} because 
instead of accessing the [key] variable inside the condition parameter for store key for each loop, the code in line 13 instead adding .key behind and the system
interpret as string literal so each loop is overwrite the previous key value.
.*/

// c) What is the target return value when invert is called with {a : 1, b: 2}
// is also the same with { a: 1, b: 2 } because is overwrite the previous key each loop.

// c) What does Object.entries return? Why is it needed in this program?
/* Object.entries return deconstruct object key and value pair into individual item in an array. 
This is very important because since object is are not iterable, this help by deconstructing object into array when we try to loop each key and value pair*/

// d) Explain why the current return value is different from the target output
/*
Because inside the for of loop, the invertedObj output assign they keys first instead of value for each loop. 
*/
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
