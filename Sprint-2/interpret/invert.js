// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
    // the current return will take the value in the key value pair using Object.entries and  
    // and assign it to a property called key returning {key:1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
    //after the first loop, second iteration reassigns the value to 
    //the property called key returning {key:2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
    // it should give {"1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
    //this function allows for iteration over both keys and values at once
    // instead of looping over them seperately.

// d) Explain why the current return value is different from the target output
    //for the target output, we want the property name to be the set to the value 
    // of the original key-value pair.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
