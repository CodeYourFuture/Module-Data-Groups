// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     // console.log(key, value);
//     invertedObj.key = value;
//   }

//   return invertedObj;
// }

// const obj = { a: 1, b: 2 };
// console.log(invert(obj));

// a) What is the current return value when invert is called with { a : 1 } // {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 } // {key: 2} (key as a name of field repeats 2 times.)

// c) What is the target return value when invert is called with {a : 1, b: 2} // {1: 'a', 2: 'b'}

// c) What does Object.entries return? Why is it needed in this program?
// A ==> Object.entries() returns an array of the key/value pairs of an object.
//B ==> To have access to keys and values of object as a list ,

// d) Explain why the current return value is different from the target output
// This code sets "key" as a name of key in object and it should ==> be invertedObj[value] = key;

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

const obj = { a: 1, b: 2 };
console.log(invert(obj));
module.exports = invert;
