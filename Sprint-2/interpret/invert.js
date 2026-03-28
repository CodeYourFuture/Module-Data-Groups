function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

console.assert(
  JSON.stringify(invert({ a: 1 })) === JSON.stringify({ 1: "a" }),
  "Test case 1 failed"
);
console.assert(
  JSON.stringify(invert({ a: 1, b: 2 })) === JSON.stringify({ 1: "a", 2: "b" }),
  "Test case 2 failed"
);

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { key: 2 }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key-value pairs from the object.

// d) Explain why the current return value is different from the target output
// It incorrectly assigns 'key'

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
