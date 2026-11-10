// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

export function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

/*
a) Current return value for invert({ a: 1 }) with the OLD bug:
   { key: 1 }

b) Current return value for invert({ a: 1, b: 2 }) with the OLD bug:
   { key: 2 }
   (each loop overwrites the same property named "key"; last value wins)

c) Target return value for invert({ a: 1, b: 2 }):
   { "1": "a", "2": "b" }

Object.entries returns an array of [key, value] pairs for the object.
It is needed so the loop can read both the key and the value of each property.

d) invertedObj.key always writes to a property literally named "key".
   It ignores the loop variable `key`, so keys and values are never swapped,
   and earlier entries are overwritten. The result is a new object with only
   that one "key" property — not the original object, and not an inverted map.

e) Fixed by using invertedObj[value] = key (bracket notation with the value
   as the new key). Tests in invert.test.js prove the fix.
*/











