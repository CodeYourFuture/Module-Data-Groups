// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Input must be an object");
  }

  const invertedObj = {};

  for (let [key, value] of Object.entries(obj)) {
    if (typeof key === "object") {
      key = JSON.stringify(key);
    }
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }

// --> current return value i {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// --> current return value i {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// --> Target return value is {"1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// --> Object.entries returns an array of key and value ['key', 'value'] pairs
  // Given { a: 1, b: 2 } returns [['a', '1'],['b', '2']]

// d) Explain why the current return value is different from the target output
// --> invertedObj.key = value  is creating a property named key. As the loop
    //goes through the object each value gets overwritten and we get the last 
    // argument as a value. 

// e) Fix the implementation of invert (and write tests to prove it's fixed!)


// In invert.js invert function implemented. 