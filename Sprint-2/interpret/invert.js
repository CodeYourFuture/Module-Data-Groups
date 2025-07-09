// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    const numKey = Number(key);

    if (!isNaN(numKey) && String(numKey) === key) {
      invertedObj[value] = numKey;
    } else {
      invertedObj[value] = key; //convert key to number if it is a number
    //how do i convert it to a number if it is a number? 
    //if the key is a number, convert it to a number, otherwise keep it as a string
      }
  }

  return invertedObj;
}
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 } 
// {'1':'a'}
// b) What is the current return value when invert is called with { a: 1, b: 2 } 
// { '1': 'a', '2': 'b'}
// c) What is the target return value when invert is called with {a : 1, b: 2}
// {1 : a, 2 : b }
// c) What does Object.entries return? Why is it needed in this program?
// its a method that takes a obj and returns the [key, value] pairs.
// d) Explain why the current return value is different from the target output
// cause its converted to strings, the key must be a int and the value must be a string.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// in file invert.test.js