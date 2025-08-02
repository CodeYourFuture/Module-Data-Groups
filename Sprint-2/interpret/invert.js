// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  //validate that the input is an object in the first place, if not then throw an error
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new TypeError("Input must be a non-null object");
  }
  //set the inverted object to an empty object
  const invertedObj = {};

  //use Object.entries to get an iterable array of [key, value] pairs and use a for...of loop to iterate over these pairs
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
console.log(invert({ a: 1 }));
// terminal output is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
console.log(invert({ a: 1, b: 2 }));
// terminal output is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return is { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
/*
the invert function uses a for...of loop, but regular object properties cannot be accessed directly using it (you would need a for...in loop instead). 
Therefore, to make the object iterable with a for...of loop you need the static object method Object.entries(). Object.entries() takes the properties (not just the values) of the object and returns an array of [key, value] pairs. (i.e. [[key, value], [key, value], ...]).
Using Object.entries() allows you to use a for...of loop  to access both keys making it easy to swap them when creating a new object.
*/

// d) Explain why the current return value is different from the target output
/* 
the issue with the return value being different from the target output is to do with the construction of "invertedObj.key = value;". 
By using "." dot notation on the invertedObj object, it is actually setting the property NAMED "key" (literally the string "key") on the object, not the VALUE of the variable "key". 
So, the loop overwrites the previous value with every loop and you end up with only one property who's value updates, e.g. { key: 2 }.
*/

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// To fix the implementation of invert, it needs bracket notation on the invertedObj in the function body to swap the keys and values correctly (use the value of the variable value as the key, and key as the value):
//  invertedObj[value] = key;
