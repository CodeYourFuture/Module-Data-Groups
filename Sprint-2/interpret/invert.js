// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (Object.hasOwn(invertedObj, value)) {
      throw new Error(`Duplicate key found after inversion: "${value}"`);
    }
    invertedObj[value] = key;
  }

  return invertedObj;
}




// a) What is the current return value when invert is called with { a : 1 }
// { key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ key:  2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{ 1 : a, 2 : b}

// c) What does Object.entries return? Why is it needed in this program?
// [ [ 'a', 1 ], [ 'b', 2 ] ]. Object.entries convert object to array. Then allow to use
// array's method to achieve teh goal of function.

// d) Explain why the current return value is different from the target output
// invertedObj.key is not mean convert value to key. It just simply print string "key"

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports = invert;
