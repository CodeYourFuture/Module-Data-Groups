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
console.log(invert({ x: 10, y: 20 }));
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// it will be {"key" : 1}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// it will be ["key": 2]
// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target return value needs to be {"1": "a", "2": "b"}
// c) What does Object.entries return? Why is it needed in this program?
// object.entries return an array of each [key] and [value] pair and in this case it is necessary as we need both the key and value from the object.
// d) Explain why the current return value is different from the target output
// there is an bug as we use .key instead of [value]. So instead of taking the variable [value] we are instead creating a property called key which isnt correct.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
