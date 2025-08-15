// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) { 
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    const stringValue = String(value); // Ensure value is a string
    if (invertedObj.hasOwnProperty(value)) {
      throw new Error(`Duplicate value found: ${value} for keys ${invertedObj[value]} and ${key}`);
    }
    invertedObj[stringValue] = key; 
  }
  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 } 
//{key : 1} because invertedObj.key means object "invertedObj" has a key property with the exact name "key" and we need to add a key that its name is the value of key property.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{key : 1, key : 2} because invertedObj.key means object "invertedObj" has a key property with the exact name "key" and we need to add a key that its name is the value of key property. 

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{1 : a ,2 : b} because invertedObj.key means object "invertedObj" has a key property with the exact name "key" and we need to add a key that its name is the value of key property.

// d) What does Object.entries return? Why is it needed in this program?
//Object.entries returns an array of key-value pairs from the object.

// e) Explain why the current return value is different from the target output
//The current return value is different because the keys in the inverted object are being set to the string representation of the original values, while the target output expects the keys to be the original values themselves.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
//The implementation has been fixed to ensure that the values are converted to strings before being used as keys in the inverted object. Additionally, it checks for duplicate values to prevent overwriting keys in the inverted object.