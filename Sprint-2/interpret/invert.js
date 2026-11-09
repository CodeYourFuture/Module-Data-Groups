// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

// a) The original implementation returns { key: 1 } for { a: 1 }.

// b) For { a: 1, b: 2 }, it returns { key: 2 }.

// c) The target is { "1": "a", "2": "b" }.

// Object.entries returns an array of [key, value] pairs, so both can be
// accessed and swapped while iterating over the object.

// d) Dot notation writes to the literal property "key" on every iteration;
// it does not use the value of the key variable or swap keys and values.

module.exports = invert;
