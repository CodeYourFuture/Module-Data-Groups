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
// {"1":"a"}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { "1": "a", "2": "b" }
// c) What is the target return value when invert is called with {a : 1, b: 2}
// { a: 1, b: 2 }
// c) What does Object.entries return? Why is it needed in this program?
// returns an array of a given object's which is  own enumerable string-keyed property key-value pairs.

// d) Explain why the current return value is different from the target output
// The code uses invertedObj.key = value which creates a property literally named "key" instead of dynamically using the value of key
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
console.log(invert({ a: 2, b: 3 })); // ===> { '2': 'a', '3': 'b' }
console.log(invert({ b: 1, c: 2 })); // ===> { '1': 'b', '2': 'c' }
console.log(invert({ code: "war" })); // ===> { war: 'code'
console.log(invert({})); // ===> {}
