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

// a) What is the current return value when invert is called with { a : 1 }
//>>>>This code has a mistake when trying to swap keys and values. Specifically, it uses 
//invertedObj.key = value;, which means it's always assigning the value to the property key
// of invertedObj. 
// we want the key to be the new value and the value to be the new key.When we call function
// with { a : 1 }:
//The loop would run once with key = 'a' and value = 1.The code would execute
// invertedObj.key = 1, which creates a "key" with value 1, and result is { key: 1 }.
// So, the current return value for { a : 1 } is: { "key": 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//>>>>The current return value for { a: 1, b: 2 } is: { "key": 2 }
//For the first iteration, result of invertedObj.key = value would be { key: 1 },in the second
// iteration result would be { key: 2}, because key is in object and it the second iteration
// it mutate the value.

// c) What is the target return value when invert is called with {a : 1, b: 2}
//>>>>target return value for { a: 1, b: 2 } is: { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
//>>>>Object.entries returns an array of key-value pairs from an object.It is used in the
// program to loop over each key-value pair of the object. Without it, there would be no
// easy way to access both the key and the value at the same time inside the loop.

// d) Explain why the current return value is different from the target output
//>>>>The current return value is incorrect because the code mistakenly assigns value to 
//the key property of the invertedObj. It does not actually swap the key and value.
// To fix this we should use invertedObj[value] = key; to properly swap the key-value pairs.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
//>>>>

console.log(invert({ a: 1 }));           //  { "1": "a" }
console.log(invert({ a: 1, b: 2 }));     //  { "1": "a", "2": "b" }
console.log(invert({ x: 10, y: 20 }));   //  { "10": "x", "20": "y" }