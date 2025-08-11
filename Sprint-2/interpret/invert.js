// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
    //invertedObj.key = value;
  }
  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
//current return value is: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// current return value is: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// target output value is: { '1': 'a', '2': 'b' }

// c) What does Object.entries return? Why is it needed in this program?
// It returns an array of key/values of object. It is needed because in order to invert key and values we have to know them.

// d) Explain why the current return value is different from the target output
// because .key create one object paramenter with name 'key' and assign to it value(each of values shoud be a key)

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
