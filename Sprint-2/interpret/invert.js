// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

//function invert(obj) { 
 // const invertedObj = {};

  //for (const [key, value] of Object.entries(obj)) {
   // invertedObj.key = value;
 // }

 // return invertedObj;
//}

// a) What is the current return value when invert is called with { a : 1 }
//{ key: 1 }


// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ key: 2 }


// c) What is the target return value when invert is called with {a : 1, b: 2}
//{ "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?
//Object.entries() returns an array of key-value pairs from the object.
//In this program, Object.entries() is used because it gives us both the key and value from the input object in an iterable form, which allows us to process them and swap their places in the inverted object.

// d) Explain why the current return value is different from the target output
//The issue is that the loop is using a hardcoded string "key" for the property of invertedObj. Instead of assigning the key dynamically from the input object (key), it is always setting key as the property name in invertedObj, leading to incorrect results.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;  

  return invertedObj;
}

module.exports = invert;
