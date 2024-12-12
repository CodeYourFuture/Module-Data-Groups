// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

const original = { a: 1, b: 2 };
const inverted = invert(original);
console.log(inverted);

// a) What is the current return value when invert is called with { a : 1 }
//key: 1

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// '1': 'a', '2': 'b',

// c) What is the target return value when invert is called with {a : 1, b: 2}
 //key: 2

// c) What does Object.entries return? Why is it needed in this program?
//It returns an array of key-value pairs of the  object 

// d) Explain why the current return value is different from the target output
//The original code tries to swap the keys and the values, 
//but it does it in a way that only the key and values get swapped. 
//So, after the swapping, all object end up with the same value and key.

 //e) Fix the implementation of invert (and write tests to prove it's fixed!)
Fixed/ passed testes*/



function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;