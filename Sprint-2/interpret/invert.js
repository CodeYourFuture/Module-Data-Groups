// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};
  // console.log(Object.entries(obj))

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
const result = invert({ a: 1, b: 2 });
const expected = { '1': 'a', '2': 'b' };

console.assert(JSON.stringify(result) === JSON.stringify(expected), "It should return { '1': 'a', '2': 'b' }")

// a) What is the current return value when invert is called with { a : 1 }
    // { key: 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
    // { key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
    // {"1": "a", "b": "2"}

// c) What does Object.entries return? Why is it needed in this program?
    // Object.entries returns key-value pairs array within array. We needed to separate each key-value pair
    // and we could swap them

// d) Explain why the current return value is different from the target output
    // Because right now we are not returning the value of the key, we are just adding new key(with the name key) 
    // to the invertedObj variable. To fix this, we need to use bracket to use the value of the variable key.
    // Moreover, we need to swap the object key-value pair.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
