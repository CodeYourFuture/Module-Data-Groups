// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

const obj = { x: 10, y: 20 };

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

console.log(invert(obj));
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 } - { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 } - { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2} - {1 : a; 2 : b}

// c) What does Object.entries return? Why is it needed in this program? it is convert object into the array and return key and value. It's needed because in this program used for of loop witch сan't be used for objects

// d) Explain why the current return value is different from the target output
// Because on the line 14 used wrong method to create a invert object, instead of use invertedObj.key= value(can't get access to key variable by using dot need use square brackets for dynamically access object properties)need to use invertedObj[value] = key, so it will create new object with opposite keys - values to original one

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
