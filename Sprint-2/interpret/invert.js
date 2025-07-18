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
// console.log(invert({ a : 1 }));
// {key:1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// console.log(invert({ a: 1, b: 2 }));
// {key:2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {'1':'a', '2', 'b'}

// c) What does Object.entries return? Why is it needed in this program?
// It returns an array, each item of which is itself an array. Looks like [[key,value],[key,value]...]

// d) Explain why the current return value is different from the target output
// . notation can only be used to access keys in objects with the actual name of the key. Line 13 is always creating/referencing a key named "key". So the final returned object will look like {key: final value from original object}.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;