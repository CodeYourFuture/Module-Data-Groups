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
// { key: 1 }


// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }
// Why?
// First loop sets invertedObj.key = 1
// Second loop overwrites that with invertedObj.key = 2


// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?
v


// d) Explain why the current return value is different from the target output
// Because invertedObj.key = value uses the literal string "key" instead of the variable value. It does not create dynamic keys.
// we must use computed property names:
// invertedObj[value] = key;

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; 
  }

  return invertedObj;
}

module.exports = invert;