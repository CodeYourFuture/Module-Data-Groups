// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Correctly swapping key and value
  }

  return invertedObj;
}

module.exports = invert;


// a) What is the current return value when invert is called with { a : 1 }
 // Wrong because "key" is used literally instead of dynamic assignment.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Wrong because "key" is being overwritten in the loop

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{ "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?
//It returns an array of key-value pairs from the object.
//It is needed here to loop over key-value pairs easily.

// d) Explain why the current return value is different from the target output
//The key property is being used literally (invertedObj.key), rather than dynamically using the value as the new key.
// This causes incorrect assignments and overwrites..

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
