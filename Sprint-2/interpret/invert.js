// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
    // The current implementation of the invert function uses this line inside the loop:invertedObj.key = value;
    // This means that it is assigning the string "key" to the invertedObj object rather than using the actual value of the key. It should be using the variable key instead.
    // So, if you call invert({ a: 1 }), the key will always be "key", and it will result in:{ key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
    //  the result will be:{ key: 1 }
    // This is because it still uses the string "key" for every key in the original object, instead of the actual key a or b.


// c) What is the target return value when invert is called with {a : 1, b: 2}
   // The target behavior is to swap the keys and values in the object. For { a: 1, b: 2 }, the expected output is:{ "1": "a", "2": "b" }
   

// c) What does Object.entries return? Why is it needed in this program?
  // Object.entries(obj) returns an array of [key, value] pairs from an object
  // This is useful in the program because we need to loop over each key-value pair in the original object to swap the keys and values. Object.entries provides a way to get each pair in a format that can be easily iterated over.

// d) Explain why the current return value is different from the target output
   // The issue lies in this line:invertedObj.key = value;
   // Instead of using the actual variable key, the string "key" is being used as the key in the invertedObj. This is causing every entry to be assigned to "key", which is why you don't get the expected result

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
   // To fix the issue, we need to ensure that the key in the loop is being used dynamically as the key in the invertedObj, and the value should be assigned to it.

console.log(invert({ a: 1 })); 
console.log(invert({ a: 1, b: 2 })); 
console.log(invert({ x: 10, y: 20 })); 