// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//   }

//   return invertedObj;
// }

// a) What is the current return value when invert is called with { a : 1 }
// it will return { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// return {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// target value is  { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// it will return [ [ 'a', 1 ], [ 'b', 2 ] ]. It will allows us to iterate an object property using a for loop.

// d) Explain why the current return value is different from the target output
// because of the incorrect property assignment inside the loop
// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Correctly swap key and value
  }

  return invertedObj;
}
// test cases to varify the fix:
console.log(invert({ a : 1 }));
console.log(invert({ a : 1 , b : 2}));
console.log(invert({ a : 10 , b : 20}));
console.log(invert({ key1: "value1", key2: "value2" }));
console.log(invert({}));

