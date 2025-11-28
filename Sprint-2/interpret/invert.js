// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

//function invert(obj) {
// const invertedObj = {};

 // for (const [key, value] of Object.entries(obj)) {
 //   invertedObj.key = value;
 // }

 // return invertedObj;
//}

// a) What is the current return value when invert is called with { a : 1 }: {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }: {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}: {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program? 
//  Object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs. It is needed in this program to iterate over each key-value pair in the object so that we can swap them when creating the inverted object.

// d) Explain why the current return value is different from the target output?
//  The current return value is different from the target output because in the line (invertedObj.key = value;), the property name 'key' is being used literally instead of using the variable (key). This means that every iteration of the loop is overwriting the same property 'key' in the inverted object, resulting in only the last value being stored.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

// Fixed implementation:
  
  
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; 
  }

  return invertedObj;
}
module.exports = invert;


// Test cases:

const invert = require('./invert');

// single key:

test('invert single key-value pair', () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

// multiple keys:

test('invert multiple key-value pairs', () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

// Empty object:

test('invert empty object', () => {
  expect(invert({})).toEqual({});
});

// Non-string values:

test('invert with non-string values', () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ "10": "x", "20": "y" });
});