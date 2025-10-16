// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Input should be an object");
  }

  const invertedObj = {};

  for (let [key, value] of Object.entries(obj)) {
    if (typeof key === "object") {
      key = JSON.stringify(key);
    }
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    invertedObj[value] = key;
  }

  return invertedObj;
}

console.log(invert({ a: 1, b: 2 }));

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// When invert is called with { a: 1 }, it returns { key: 1 }
// I found the way of assigning key and value is currently not right.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current return is { key: 2 }
// The value of key changed from 1 to 2, when it is reassigned again in the for loop

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value was supposed to be { '1': 'a', '2': 'b' }
// as the original key and value is swapped

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries return an array of arrays of each pair of key and value like [['a', '1'], ['b', '2']]
// if Object.entries({ a: 1, b: 2 }) is called
// We need it because we need to take each pair of key and value [key, value] in array like ['a', '1']
// and swap them in the next step of the for loop

// d) Explain why the current return value is different from the target output
// The current way of assigning key and value invertedObj.key = value;
// can't actually access the referencing value of key, which is 'a'
// In fact, it created a new key named 'key', rather than 'a'
// Besides, as we want to swap the key: value to value: key
// we should refactor the assigning to invertedObj[value] = key

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
