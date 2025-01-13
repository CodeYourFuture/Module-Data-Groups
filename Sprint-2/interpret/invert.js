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

// a) What is the current return value when invert is called with { a : 1 }
//Answer: the current return value is { key: 1}


// b) What is the current return value when invert is called with { a: 1, b: 2 }
//Answer: the current return value is { key: 1 } { key: 2 }


// c) What is the target return value when invert is called with {a : 1, b: 2}
//Answer: the target return value is {"1" : "a", "2" : "b"}

// c) What does Object.entries return? Why is it needed in this program?
//Answer: The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

// d) Explain why the current return value is different from the target output
//The issue lies in line 13 of the code: invertedObj.key = value;
//The correct way to dynamically assign a property using the value of key is to use bracket notation
//Also corrcted version would be like this: invertedObj[value] = key;

// e) Fix the implementation of invert (and write tests to prove it's fixed!)


//testing with test cases:

//Test case 1: Basic Test Case: Invert a simple object with one key-value pair
console.assert(JSON.stringify(invert( {a : 1})) === JSON.stringify({"1" : "a"}), "Test case 1 failed");

//Test case 2: Multiple Key-Value Pairs: Invert an object with multiple properties
console.assert(JSON.stringify(invert( {a : 1, b : 2})) === JSON.stringify({"1" : "a", "2" : "b"}), "Test case 2 failed");

//Test case 3: Empty Object: Invert an empty object.
console.assert(JSON.stringify(invert({})) === JSON.stringify({}), "Test case 3 failed");

//Test case 4: Object with Mixed Data Types
console.assert(JSON.stringify(invert( {name : "John", age : 33})) === JSON.stringify({"John" : "Name" , "33" : "age"}), "Test case 3 failed");