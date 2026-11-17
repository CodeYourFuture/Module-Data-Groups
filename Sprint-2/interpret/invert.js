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
// { key: 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1": "a", "2": "b"}
// c) What does Object.entries return? Why is it needed in this program?
// it returns the object's properties as pairs where each of them contains a key and it's value.
// It's needed here to make key and value pairs accessible (to eventually build an inverted version of the object).
// d) Explain why the current return value is different from the target output
// In invertedObj.key = value the dot means 'use the property literary named 'key'', not the variable key.
// So each loop pass overwrites that same property and the returned object contains only the last value, like {key: 'blue}.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
