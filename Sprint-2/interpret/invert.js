function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// Current return value is 1.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current return value is 2.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target value is { "1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of object [key, value] pairs.
// It converts an object into an array, so the loop works, since plain objects can't be used with loops.

// d) Explain why the current return value is different from the target output
// It differs due to the fact that "invertedObj.key" uses the wrong notation, "key", instead of the variable's value.
// Also, adding brackets to the literal name, [key], would only copy the object not fix it.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
