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
// {1:'a'}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {1:'a', 2:'b'}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {1:'a', 2:'b}
// c) What does Object.entries return? Why is it needed in this program?
// It simply takes an object and then returns it as an array of key-value pairs.It is needed in this program in order to turn an object into an array.
// d) Explain why the current return value is different from the target output
// I can't see the current return value, but I can see that the key is not being set correctly in the inverted object.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports= invert;