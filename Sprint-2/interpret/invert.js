// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value; // key 1
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// {key : 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key ; 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {1 : "a", 2 : "b"}

// c) What does Object.entries return? Why is it needed in this program?
// It returns all the key-value pairs of an object. We need it to get both the keys and values.

// d) Explain why the current return value is different from the target output
/*Because we are not swapping it correctly. We haven't handled the key correctly,
 so it's giving us the "key" keyword, not the way we need it.
 Plus, we aren't storing each value correctly, so the previous value gets overwritten
 when there are multiple values.*/

//e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
const obj = {x : 10, y : 20};
console.log(invert(obj));