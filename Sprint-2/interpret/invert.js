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

             //{ key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }

             // { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

            // { "1": "a", "2": "b" }


// d) What does Object.entries return? Why is it needed in this program?


            // Object.entries() returns an array of [key, value] pairs from an object, e.g., { a: 1, b: 2 } becomes [["a", 1], ["b", 2]].
            // It’s needed to easily loop through the key-value pairs and swap them.


// e) Explain why the current return value is different from the target output

            // The code is incorrectly assigning value to the property key, so it only stores the last key-value pair.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Correct swap
  }
  return invertedObj;
}


// console.log(invert({ a: 1 }));  // { "1": "a" }
// console.log(invert({ a: 1, b: 2 }));  // { "1": "a", "2": "b" }


module.exports = invert;

