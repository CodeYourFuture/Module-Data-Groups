// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

//function invert(obj) {
 // const invertedObj = {};

  //for (const [key, value] of Object.entries(obj)) {
  //  invertedObj.key = value;
  //}

  //return invertedObj;


// a) What is the current return value when invert is called with { a : 1 }
{ key: 1 } 

// b) What is the current return value when invert is called with { a: 1, b: 2 }
{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2} 
//the target is to swap keys and values
{ 
  "1": "a",
  "2": "b"
}

// c) What does Object.entries return? Why is it needed in this program?
//it returns an arrays of pairs   
[
  ["a", 1],
  ["b", 2]
]
// it loops through the keys and the value at the same time 
// d) Explain why the current return value is different from the target output
Object.entries({ a: 1, b: 2 })
//current return value
[
  ["a", 1],
  ["b", 2]
]
//It lets us easily loop through the keys and values

//for (const [key, value] of Object.entries(obj))
//Because you wrote:
//invertedObj.key = value;
//This literally creates a property named "key", not the value of the variable key.
//i need bracket notation:
//invertedObj[value] = key;
//This sets the property using the variable.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; 
  }

  return invertedObj;
}
console.log("Test 1:", invert({ a: 1 })); 
console.log("Expected: { '1': 'a' }"); 
console.log("-------------");

console.log("Test 2:", invert({ a: 1, b: 2 }));
console.log("Expected: { '1': 'a', '2': 'b' }");
console.log("-------------");

console.log("Test 3:", invert({}));
console.log("Expected: {}");
console.log("-------------");

module.exports = invert;
