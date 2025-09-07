
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Correct usage: use value as key, and key as value
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }?
// Answer: { key: 1 } — because the code uses a literal property name "key" instead of using the variable.

// b) What is the current return value when invert is called with { a: 1, b: 2 }?
// Answer: { key: 2 } — the second iteration overwrites the same "key" property with the latest value.

// c) What is the target return value when invert is called with { a: 1, b: 2 }?
// Answer: { "1": "a", "2": "b" } — we want keys and values swapped. Numbers become string keys.

// d) What does Object.entries return? Why is it needed in this program?
// Answer: Object.entries(obj) returns an array of [key, value] pairs. It's used to loop through 
// both keys and values of an object easily using destructuring.

// e) Explain why the current return value is different from the target output
// Answer: Because the implementation was using `invertedObj.key = value`, which assigns a 
// literal property "key" instead of using the variable. We need to use `invertedObj[value] = key`.