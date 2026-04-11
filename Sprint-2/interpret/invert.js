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
      // {1 : 'a', 2: 'b'}

// c) What does Object.entries return? Why is it needed in this program?
      // Object.entries() returns an array of a given object's own enumerable string-keyed property key-value pairs
      // It is needed here in order to loop over each of the key-value pairs

// d) Explain why the current return value is different from the target output
      // It is because `.key `is used on object.
      // Instead [] should be used

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
      // fixed the issue by using `invertedObj[value] = key`
      // It is swaping the key and value in the returned object