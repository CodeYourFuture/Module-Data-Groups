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
console.log(invert({ a: 1 })); // { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
console.log(invert({ a: 1, b: 2 })); // { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{ '1': 'a', '2': 'b' }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array whose elements are arrays corresponding to 
// the enumerable string-keyed property key-value pairs found directly upon object.
// We need then in order to swap keys with values

// d) Explain why the current return value is different from the target output
// because inl ine 13 we assign only one value 'key' -->
// it is not swapped and it is the same one value each iteration

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invertFixed(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

const currentOutput1 = invertFixed({ a: 1 });
const targetOutput1 = { '1': 'a' };
console.assert(
  JSON.stringify(currentOutput1) == JSON.stringify(currentOutput1),
  `current output: ${JSON.stringify(currentOutput1)}, target output: ${JSON.stringify(currentOutput1)}`
);

const currentOutput2 = invertFixed({ a: 1, b: 2 });
const targetOutput2 = { '1': 'a', '2': 'b' };
console.assert(
  JSON.stringify(currentOutput2) == JSON.stringify(currentOutput2),
  `current output: ${JSON.stringify(currentOutput2)}, target output: ${JSON.stringify(currentOutput2)}`
);
