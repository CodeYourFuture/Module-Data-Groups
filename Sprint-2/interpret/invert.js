// Let's define how invert should work
// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x: 10, y: 20}), target output: {"10": "x", "20": "y"}

/*
--- Answers to the Interpret Questions ---

a) What is the return value of invert({a: 1}) in the old broken code?
Answer: It returned { key: 1 } because dot notation (.key) creates a literal string key named "key".

b) What is the return value of invert({a: 1, b: 2}) in the old broken code?
Answer: It returned { key: 2 } because the literal property "key" is overwritten in the second loop iteration.

c) What is the target return value of invert({a: 1, b: 2})?
Answer: The target return value is { "1": "a", "2": "b" }.

c-continued) What does Object.entries do? Why is it needed here?
Answer: Object.entries(obj) converts the object into an array of key-value pairs, like [["a", 1], ["b", 2]]. It is needed because we cannot use a 'for...of' loop directly on a standard object.

d) Why is the current return value different from the target?
Answer: Because the old code used invertedObj.key (a hardcoded key name) instead of assigning the dynamic value as the new key.

e) How can you fix it?
Answer: By using bracket notation to set the 'value' as the new dynamic key, and assigning the 'key' as its value: invertedObj[value] = key;
*/

// Swap keys and values in an object
function invert(obj) {
  // Create an empty object to store the swapped pairs
  const invertedObj = {};

  // Loop through each [key, value] pair in the original object
  for (const [key, value] of Object.entries(obj)) {
    // Use the VALUE as the new key, and the KEY as the new value
    invertedObj[value] = key;
  }

  // Return the inverted object
  return invertedObj;
}

module.exports = invert;