// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  if(typeof obj !== "object" || Array.isArray(obj)){
    throw new Error("Your input is invalid!")
  }

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// let call1 = invert([]);
// let call2 = invert({ a: 1, b: 2});
// console.log(call1)
// console.log(call2)


module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
// The return value is { key: 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The return value is { key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value is { '1': 'a', '2': 'b' }
// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key/value pairs of the same object and each pair is also an array with two elements(key and value). We need it in this program so that it will enable us to loop through the array and invert the items.
// d) Explain why the current return value is different from the target output
//The current return value is different from the target output because the code uses .key instead of [key]. Given that we are using .key, it gets interpreted as a property literal called "key" and not the value stored in the variable key. This causes the invert object to only have a single key called "key". To fix it and get the desired output, we need to use [key] so that the value it's storing can be use as property name when creating the new object.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
