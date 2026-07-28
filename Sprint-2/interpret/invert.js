function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) Before the fix, invert({ a: 1 }) returned:
// { key: 1 }

// b) Before the fix, invert({ a: 1, b: 2 }) returned:
// { key: 2 }
// The second loop replaced the first value.

// c) The target return value is:
// { "1": "a", "2": "b" }

// d) Object.entries returns an array of [key, value] pairs.
// It allows the loop to access both parts of each property.

// e) The original code used dot notation, which created a property
// literally named "key" instead of using the value dynamically.

module.exports = invert;