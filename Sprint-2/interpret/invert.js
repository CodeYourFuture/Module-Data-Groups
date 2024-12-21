// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};
  // return Object.entries(obj);
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
    // invertedObj.key = value;
  }

  return invertedObj;
}
console.log(invert({ x: 10, y: 20, z: 30 }));
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
//value can be object {"a":"1"}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {"1":"a","2":"b"}
// c) What is the target return value when invert is called with {a : 1, b: 2}
//{"1":"a","2":"b"}
// c) What does Object.entries return? Why is it needed in this program?
//that will return nested array
// d) Explain why the current return value is different from the target output
//invertedObj.key is iterate and last result is invertedObj to be key and value will be last item
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
