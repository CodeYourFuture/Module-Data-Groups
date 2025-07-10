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
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }

//{key : 1} because invertedObj.key= value add  a property with the exact name "key" and value "1" to invertedObj.

// b) What is the current return value when invert is called with { a: 1, b: 2 }

//{key : 2} because first the function add {key:1} to invertedObj and then modify the property and assign value 2 to key "key".

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{1 : a ,2 : b}
// c) What does Object.entries return? Why is it needed in this program?

//It returns pairs of keys and values as an Array of pairs.

// d) Explain why the current return value is different from the target output

//Because invertedObj.key means object "invertedObj" has a key property with the exact name "key" and we need to add a key that its name is the value of key property.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
