// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {

  if(typeof obj !== "object" || obj === null || Array.isArray(obj)){
    throw new Error('Invalid input. Input must be a plain object.')
  }
  const invertedObj = {};
  // checks for duplicate values 
  for (const [key, value] of Object.entries(obj)) { 
    if (invertedObj[value] !== undefined) {
      throw new Error(`Duplicate value found. Cannot invert.`);
    }
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

console.log(invert('I enjoy learning JavaScript'));

// a) What is the current return value when invert is called with { a : 1 }

// The current return value is {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }

//The current return value is {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}

// The target return value is {'1': 'a', '2': 'b'}

// c) What does Object.entries return? Why is it needed in this program?

// This method returns an array of [key, value] pairs from the object

// d) Explain why the current return value is different from the target output

//The line invertedObj.key = value; is actually setting the property literally named "key" on invertedObj, rather than using the value of key as the property name. Instead, it should be invertedObj[key] = value; to dynamically set the property of invertedObj using the value of key.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
