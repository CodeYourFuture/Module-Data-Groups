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

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
//{"1": "a"}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{"1": "a", "2": "b"}
// c) What is the target return value when invert is called with {a : 1, b: 2}
//{"1":"a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
//It takes obj and returns an array of key and value pairs where each pair is an array
//  of its own of keys and value
//const obj= {a:1, b:2, c:3}
// console.log(Object.entries(obj));
// output is:
//[["a":1], ["b":2],["c":3]]

// d) Explain why the current return value is different from the target output ?
// The invertedObj.key is creating a property called key, its not using the value of the key variable.
//it is going against the inverted function code returning wrong results
// instead of having this output from the inverted function:
//{"1":"a", "2": "b"}
// the output is:
//{key: 1, key: 2}
// The purpose of the function is to invert pairs of [key, value] into{[value]: key}, but using the
// invertedObj.key results in getting the same key all the time, which goes against the purpose of
//the invert function.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
