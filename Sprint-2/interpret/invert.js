// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    console.log(key);
    console.log(value);
    console.log(invertedObj);
    invertedObj[value] = key;
    console.log(invertedObj);
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { '1' : 'a', '2': 'b' }

// c) What does Object.entries return? Why is it needed in this program?
// It returns the object as an array of key-value pairs which can then be iterated.

// d) Explain why the current return value is different from the target output
// Dot notation is used on the invertedObj object, whereas square-bracket notation should be used.
// What is happening is that invertedObj.key, key is seen as the property name.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports = invert;
