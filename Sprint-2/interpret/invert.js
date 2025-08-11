// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/* function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}
*/

// a) What is the current return value when invert is called with { a : 1 }
// answer: the current return value is {key : 1} because the key is not being set correctly

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// answer: the current return value is {key : 2} because the key is not being set correctly and it overwrites the previous key-value pair

// c) What is the target return value when invert is called with {a : 1, b: 2}
// answer: the target return values should be {"1": "a", "2": "b"}  because we want to swap the keys and values around in the object

// c) What does Object.entries return? Why is it needed in this program?
// answer: Object.entries returns an array of key values pairs from the object to make it easier to iterate through object properties

// d) Explain why the current return value is different from the target output
// answer: the current return value is different from the target output because the key is not being set correctly in the invertedObj instead of setting the value as the key it is setting the key as the value.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// answer: to fix this we have need to change the line "invertedObj.key = value;" to "invertedObj[value] = key;" so that the value is set as the key and the key is set to the value

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}