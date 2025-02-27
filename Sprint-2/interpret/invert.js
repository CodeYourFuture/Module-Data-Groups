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

console.log(invert({ a : 1 }));
console.log(invert({ a: 1, b: 2 }));


module.exports = invert
// a) What is the current return value when invert is called with { a : 1 } ans: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 } ans: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2} ans: {1: a, b: 2}

// c) What does Object.entries return? Why is it needed in this program? ans: returns an array of Key-value pairs for each property. used to return and array like [key,value] from our object obj.

// d) Explain why the current return value is different from the target output ans: invert.key = value needs to be changed to invertedObj[value] = key;  because invert.key will be looking for a specific property called "key" and the "value" and "key" need to be swapped.  

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
