// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    console.log(key);
    console.log(value);
    
    invertedObj[value] = key;
  }

  return invertedObj;
}

console.log(invert({ a: 1, b: 2 }));




// a) What is the current return value when invert is called with { a : 1 }
// It treated the key as a string Key not as the dynamic variable. So it assigns 1 as a value. { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Key property is overwritten in each iteration because it is a string "key". { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1" : "a", "2" : "b"}

// c) What does Object.entries return? Why is it needed in this program?
// It coverts the object key-value to array in order to use for loop and accessing the keys and values.


// d) Explain why the current return value is different from the target output
// because we are using string key which is not dynamic and also we have not used the function to access the value properly.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)


module.exports = invert