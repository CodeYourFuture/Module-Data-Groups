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
// {key:1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{key:1, key:2}
// c) What is the target return value when invert is called with {a : 1, b: 2}
//{"1":"a", "2":"b"}

// c) What does Object.entries return? Why is it needed in this program?
//It returns array with arrays with key value. I can loop over it and access to the key and values each pair.

// d) Explain why the current return value is different from the target output
// Because we expect to get {value:key} but because our function does't work properly we recived key:value. Moreover it takes actual key word as a key.
//
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invertObj(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
module.exports = invertObj;
