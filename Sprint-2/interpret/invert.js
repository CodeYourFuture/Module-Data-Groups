// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// Example:
// invert({ x: 10, y: 20 })
// should return:
// { "10": "x", "20": "y" }

/*
a) What is the current return value when invert({ a: 1 }) is called?

Current output:
{ key: 1 }

Reason:
The code uses invertedObj.key which creates a property literally called "key"
instead of using the variable key.

---------------------------------------------------

b) What is the current return value when invert({ a: 1, b: 2 }) is called?

Current output:
{ key: 2 }

Reason:
The second iteration overwrites the first value because the property name
is always "key".

---------------------------------------------------

c) What is the target return value when invert({ a: 1, b: 2 }) is called?

Expected output:
{
  "1": "a",
  "2": "b"
}

Keys and values should be swapped.

---------------------------------------------------

d) What does Object.entries return? Why is it needed?

Object.entries(obj) converts an object into an array of [key, value] pairs.

Example:
Object.entries({ a: 1, b: 2 })

returns:
[
  ["a", 1],
  ["b", 2]
]

This allows us to loop through object properties using for...of.

---------------------------------------------------

e) Why is the current return value different from the target output?

Because invertedObj.key uses the literal property name "key".
To use the value dynamically as the key, we must use bracket notation:
invertedObj[value] = key;
*/

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Correct implementation: swap key and value
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
