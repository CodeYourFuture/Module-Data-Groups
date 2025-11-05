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

// // returns { key: 1 } : Wrong because invertedObj.key = value; literally uses the string "key" as a property instead of using the variable key

// b) What is the current return value when invert is called with { a: 1, b: 2 }

//// returns { key: 2 }  Only one property "key" exists. It overwrites "key" twice.

// c) What is the target return value when invert is called with {a : 1, b: 2}

//{ "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?

//Object.entries(obj) returns an array of key-value pairs. Needed because we want to loop over each key-value pair in the object.

// d) Explain why the current return value is different from the target output

//invertedObj.key = value; → sets the literal property "key" instead of using the variable value as the

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

//
