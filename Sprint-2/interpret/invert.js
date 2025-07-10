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

// Test cases to verify the functionality of invert
console.log(invert({ a: 1 })); // { '1': 'a' }
console.log(invert({ a: 1, b: 2 })); // { '1': 'a', '2': 'b' }
console.log(invert({ x: 10, y: 20 })); // { '10': 'x', '20': 'y' }
console.log(invert({ name: "Alice", age: 30 })); // { 'Alice': 'name', '30': 'age' }

// a) What is the current return value when invert is called with { a : 1 }

/* { key: 1 }. This is because the code is using `invertedObj.key`. 
it uses dot notation with the literal word "key". 
The key 'key' is being set to the value of 1.
If we use `invertedObj.Smith = 1`, it will return { Smith: 1 }
/*

// b) What is the current return value when invert is called with { a: 1, b: 2 }

/* { key: 2 }
This is because the loop iterates over the entries of the object,
and the last entry processed is 'b: 2'.
The key 'key' is set to the value of 2, overwriting the previous value
of 1 from the first iteration.
*/

// c) What is the target return value when invert is called with {a : 1, b: 2}

/* { '1': 'a', '2': 'b' }
This is the expected output where the keys and values are swapped.
*/

// c) What does Object.entries return? Why is it needed in this program?

/* [["a", 1], ["b", 2]]
Object.entries returns an array of key-value pairs from the object.
It is needed in this program to iterate over the object's properties
and their values, allowing us to swap them in the inverted object.
*/

// d) Explain why the current return value is different from the target output

/* The current return value is different from the target output
because the code is incorrectly using `invertedObj.key` instead of using the variable `key` to set the property name dynamically.
This means it always sets the property 'key' to the last value processed in the loop,
instead of creating properties with the original values as keys and the original keys as values.
*/

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
